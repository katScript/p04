package com.spring.web.order.controller;

import com.spring.web.helpers.erorrs.ErrorResponse;
import com.spring.web.helpers.message.MessageResponse;
import com.spring.web.order.payload.PackageDTO;
import com.spring.web.order.services.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/package")
public class PackageController {
    @Autowired
    public PackageService packageService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(packageService.getPackageById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllService() {
        try {
            return ResponseEntity.ok(packageService.getAllPackage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveService(@Valid @RequestBody PackageDTO data) {
        try {
            packageService.savePackage(data);
            return ResponseEntity.ok(new MessageResponse("Save package success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteService(@Valid @PathVariable Long id) {
        try {
            packageService.deletePackageById(id);
            return ResponseEntity.ok(new MessageResponse("Delete package success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }
}
