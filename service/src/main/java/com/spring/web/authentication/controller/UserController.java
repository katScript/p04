package com.spring.web.authentication.controller;

import com.spring.web.authentication.services.UserService;
import com.spring.web.helpers.erorrs.ErrorResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/user")
public class UserController {
    @Autowired
    public UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(userService.getById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!"
            ));
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll() {
        try {
            return ResponseEntity.ok(userService.getAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!"
            ));
        }
    }
}
