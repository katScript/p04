package com.spring.web.admin.controller;

import com.spring.web.admin.payload.AdminDTO;
import com.spring.web.admin.services.AdminService;
import com.spring.web.customer.services.BillingCardService;
import com.spring.web.helpers.erorrs.ErrorResponse;
import com.spring.web.helpers.message.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/admin")
public class AdminController {
    @Autowired
    public AdminService adminService;

    @Autowired
    public BillingCardService billingCardService;

    @GetMapping("/all")
    public ResponseEntity<?> getAllAdmin() {
        try {
            return ResponseEntity.ok(adminService.getAllAdmin());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(adminService.getAdminById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getByUserId(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(adminService.getAdminByUserId(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveAdmin(@Valid @RequestBody AdminDTO data) {
        try {
            adminService.saveAdminData(data);
            return ResponseEntity.ok(new MessageResponse("Admin save success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@Valid @PathVariable Long id) {
        try {
            adminService.deleteAdminById(id);
            return ResponseEntity.ok(new MessageResponse("Delete admin user success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/billing/card/all")
    public ResponseEntity<?> getAllBillingCardRequest() {
        try {
            return ResponseEntity.ok(billingCardService.getAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/billing/card/{id}")
    public ResponseEntity<?> getBillingCardRequest(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(billingCardService.getById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }
}
