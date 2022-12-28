package com.spring.web.authentication.controller;

import javax.validation.Valid;

import com.spring.web.authentication.payload.request.ForgetPasswordRequest;
import com.spring.web.authentication.payload.request.LoginRequest;
import com.spring.web.authentication.payload.request.ResetPasswordRequest;
import com.spring.web.authentication.payload.response.ForgetPasswordResponse;
import com.spring.web.authentication.payload.response.JwtResponse;
import com.spring.web.authentication.services.UserService;
import com.spring.web.helpers.erorrs.ErrorResponse;
import com.spring.web.helpers.message.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController("UserAuthController")
@RequestMapping("/v1/auth")
public class AuthController {
    @Autowired
    public UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            JwtResponse jwtResponse = userService.login(loginRequest);
            return ResponseEntity.ok(jwtResponse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!"
            ));
        }
    }

    @PostMapping("/password/reset")
    public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordRequest resetPassword) {
        try {
            userService.resetPassword(resetPassword);
            return ResponseEntity.ok(new MessageResponse("Update password success"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/password/forget")
    public ResponseEntity<?> forgetPassword(@Valid @RequestBody ForgetPasswordRequest forgetPasswordRequest) {
        try {
            ForgetPasswordResponse fpr = userService.forgetPassword(forgetPasswordRequest);
            return ResponseEntity.ok(fpr);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!"
            ));
        }
    }
}
