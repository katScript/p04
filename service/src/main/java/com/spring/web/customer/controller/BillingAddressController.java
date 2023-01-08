package com.spring.web.customer.controller;

import com.spring.web.customer.payload.BillingAddressDTO;
import com.spring.web.customer.services.BillingAddressService;
import com.spring.web.helpers.erorrs.ErrorResponse;
import com.spring.web.helpers.message.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/customer/{id}/billing")
public class BillingAddressController {
    @Autowired
    private BillingAddressService billingAddressService;

    @GetMapping("/{billingId}")
    public ResponseEntity<?> getBillingAddressById(@Valid @PathVariable Long id, @PathVariable Long billingId) {
        try {
            return ResponseEntity.ok(billingAddressService.getById(id, billingId));
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
            return ResponseEntity.ok(billingAddressService.getBillingByCustomerId(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveBillingAddressData(@Valid @PathVariable Long id, @RequestBody BillingAddressDTO data) {
        try {
            billingAddressService.saveCustomerBillingAddress(id, data);
            return ResponseEntity.ok(new MessageResponse("Save billing address success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @DeleteMapping("/{billingId}")
    public ResponseEntity<?> deleteBillingAddress(@Valid @PathVariable Long id, @PathVariable Long billingId) {
        try {
            billingAddressService.deleteCustomerBillingAddress(id, billingId);
            return ResponseEntity.ok("Delete billing address success!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }
}
