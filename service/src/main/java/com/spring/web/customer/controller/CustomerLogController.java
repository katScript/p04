package com.spring.web.customer.controller;

import com.spring.web.customer.services.CustomerLogService;
import com.spring.web.helpers.erorrs.ErrorResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/customer/{id}/log")
public class CustomerLogController {
    @Autowired
    public CustomerLogService customerLogService;

    @GetMapping("/{logId}")
    public ResponseEntity<?> getById(@Valid @PathVariable Long id, @PathVariable Long logId) {
        try {
            return ResponseEntity.ok(customerLogService.getByLogId(id, logId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(customerLogService.getAllByCustomerId(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }
}
