package com.spring.web.customer.services;

import com.spring.web.authentication.models.User;
import com.spring.web.authentication.services.AuthService;
import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.repository.CustomerRepository;
import com.spring.web.authentication.payload.request.ResetPasswordRequest;
import com.spring.web.customer.payload.CustomerDTO;
import com.spring.web.customer.payload.request.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;

@Service
public class CustomerAuthService {
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private AuthService userService;

    public void resetPassword(ResetPasswordRequest rpr) {
        User user = userService.getUserByToken(rpr.getToken());

        if (!customerRepository.existsByUser(user))
            throw new RuntimeException("Customer not exists!");

        userService.resetUserPassword(user, rpr.getPassword());
    }

    public void registerCustomer(RegisterRequest registerRequest) {
        User user = userService.registerUser(
                registerRequest.getUsername(),
                registerRequest.getEmail(),
                registerRequest.getPassword(),
                Customer.ROLE
        );

        CustomerDTO cData = registerRequest.getCustomerData();
        customerRepository.save(new Customer(
                null,
                cData.getFullName(),
                cData.getPhone(),
                cData.getEmail(),
                false,
                0.0,
                0.0,
                user,
                new HashSet<>(),
                new HashSet<>(),
                new HashSet<>(),
                new HashSet<>()
        ));
    }

    public User findByUserId(Long id) {
        return userService.userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found!"));
    }

    public void deleteCustomerAccount(Customer customer) {
        User user = customer.getUser();
        userService.deleteUser(user);
    }
}
