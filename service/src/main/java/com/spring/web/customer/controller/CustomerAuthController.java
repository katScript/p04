package com.spring.web.customer.controller;

import com.spring.web.authentication.payload.request.ResetPasswordRequest;
import com.spring.web.customer.payload.request.RegisterRequest;
import com.spring.web.customer.services.CustomerAuthService;
import com.spring.web.helpers.erorrs.ErrorResponse;
import com.spring.web.helpers.message.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/customer/auth")
public class CustomerAuthController {
    @Autowired
    private CustomerAuthService customerAuthService;

    @PostMapping("/password/reset")
    public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordRequest request) {
        try {
            customerAuthService.resetPassword(request);
            return ResponseEntity.ok(new MessageResponse("Reset password success"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }


    @PostMapping("/register")
    public ResponseEntity<?> registerCustomer(@Valid @RequestBody RegisterRequest registerRequest) {
        try {
            customerAuthService.registerCustomer(registerRequest);
            return ResponseEntity.ok(new MessageResponse("Register success"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }
}
