package com.spring.web.authentication.services;

import com.spring.web.authentication.models.Role;
import com.spring.web.authentication.models.User;
import com.spring.web.authentication.models.repository.RoleRepository;
import com.spring.web.authentication.models.repository.UserRepository;
import com.spring.web.authentication.payload.UserDTO;
import com.spring.web.authentication.payload.request.ForgetPasswordRequest;
import com.spring.web.authentication.payload.request.LoginRequest;
import com.spring.web.authentication.payload.request.ChangePasswordRequest;
import com.spring.web.authentication.payload.response.JwtResponse;
import com.spring.web.authentication.security.jwt.JwtUtils;
import com.spring.web.authentication.security.services.UserDetailsImpl;
import com.spring.web.email.models.Mail;
import com.spring.web.email.services.MailServiceImp;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    public UserRepository userRepository;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private MailServiceImp mailServiceImp;

    @Autowired
    private RoleRepository roleRepository;

    public JwtResponse login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles);
    }

    public void forgetPassword(ForgetPasswordRequest fpr) {
        User user = userRepository.findByUserName(fpr.getUserName())
                .orElseThrow(() -> new RuntimeException("Username not exists!"));

        String jwt = jwtUtils.generateJwtTokenWithoutAuth(user);

        Mail mail = mailServiceImp.prepareEmailData(
                "MaiTrongDat",
                user.getEmail(),
                "Forget password email request",
                String.format("<h1> Reset password link </h1> <br> <a href=\"%s\">Reset Link</a>", jwt)
        );

        mailServiceImp.sendEmail(mail);
    }

    public void changePassword(ChangePasswordRequest cpr) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(cpr.getUserName(), cpr.getCurrentPassword()));

        if (!authentication.isAuthenticated())
            throw new RuntimeException("Can not authorize user to reset password!");

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId())
                .orElseThrow(() -> new RuntimeException("User not found!"));

        user.setPassword(encoder.encode(cpr.getNewPassword()));
        userRepository.save(user);
    }

    public User getUserByToken(String token) {
        String username = jwtUtils.getUserNameFromJwtToken(token);
        return userRepository.findByUserName(username)
                .orElseThrow(() -> new RuntimeException("User not found!"));
    }

    public void resetUserPassword(User user, String password) {
        user.setPassword(encoder.encode(password));
        userRepository.save(user);
    }

    public User registerUser(String username, String email, String password, String role) {
        if (userRepository.existsByUserName(username))
            throw new RuntimeException(String.format("Username %s has exists!", username));

        Role userRole = roleRepository.findByCode(role)
                .orElseThrow(() -> new RuntimeException(String.format("Role %s not found!", role)));

        User user = new User(
                null,
                username,
                "",
                email,
                encoder.encode(password),
                new HashSet<>()
        );

        user.getRoles().add(userRole);

        return userRepository.save(user);
    }

    public void deleteUser(User user) {
        userRepository.deleteById(user.getId());
    }

    public UserDTO bindUserData(User user) {
        return new UserDTO(
                user.getId(),
                user.getUserName(),
                user.getAvatar(),
                user.getEmail(),
                DateTimeConverter.dateToString(user.getCreatedAt()),
                DateTimeConverter.dateToString(user.getUpdatedAt())
        );
    }
}
