package com.spring.web.admin.services;

import com.spring.web.admin.models.Admin;
import com.spring.web.admin.models.repository.AdminRepository;
import com.spring.web.admin.payload.AdminDTO;
import com.spring.web.authentication.models.User;
import com.spring.web.authentication.payload.request.ResetPasswordRequest;
import com.spring.web.authentication.services.UserService;
import com.spring.web.admin.payload.request.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminAuthService {
    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private UserService userService;

    public void resetPassword(ResetPasswordRequest rpr) {
        User user = userService.getUserByToken(rpr.getToken());

        if (!adminRepository.existsByUser(user))
            throw new RuntimeException("Customer not exists!");

        userService.resetUserPassword(user, rpr.getPassword());
    }

    public void registerCustomer(RegisterRequest registerRequest) {
        User user = userService.registerUser(
                registerRequest.getUsername(),
                registerRequest.getEmail(),
                registerRequest.getPassword(),
                Admin.ROLE
        );

        AdminDTO aData = registerRequest.getAdminData();
        adminRepository.save(new Admin(
                null,
                user,
                aData.getFullName(),
                aData.getPhone(),
                aData.getAddress(),
                aData.getCurrentAddress()
        ));
    }

    public void deleteCustomerAccount(Admin admin) {
        userService.deleteUser(admin.getUser());
    }
}
