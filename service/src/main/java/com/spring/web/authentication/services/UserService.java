package com.spring.web.authentication.services;

import com.spring.web.authentication.models.User;
import com.spring.web.authentication.models.repository.UserRepository;
import com.spring.web.authentication.payload.request.ForgetPasswordRequest;
import com.spring.web.authentication.payload.request.LoginRequest;
import com.spring.web.authentication.payload.request.ResetPasswordRequest;
import com.spring.web.authentication.payload.response.ForgetPasswordResponse;
import com.spring.web.authentication.payload.response.JwtResponse;
import com.spring.web.authentication.security.jwt.JwtUtils;
import com.spring.web.authentication.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    PasswordEncoder encoder;

    public JwtResponse login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUserName(), loginRequest.getPassword()));

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

    public ForgetPasswordResponse forgetPassword(ForgetPasswordRequest fpr) {
        User user = userRepository.findByUserName(fpr.getUserName())
                .orElseThrow(() -> new RuntimeException("Username not exists!"));

        if (!user.getEmail().equals(fpr.getEmail()))
            throw new RuntimeException("Your email not match account email!");

        String jwt = jwtUtils.generateJwtTokenWithoutAuth(user);

        return new ForgetPasswordResponse(
                jwt,
                user.getUserName(),
                user.getEmail()
        );
    }

    public void resetPassword(ResetPasswordRequest rpr) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(rpr.getUserName(), rpr.getCurrentPassword()));

        if (!authentication.isAuthenticated())
            throw new RuntimeException("Can not authorize user to reset password!");

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId())
                .orElseThrow(() -> new RuntimeException("User not found!"));

        user.setPassword(encoder.encode(rpr.getNewPassword()));
        userRepository.save(user);
    }
}
