package com.spring.web.customer.controller;

import com.spring.web.customer.payload.BillingCardDTO;
import com.spring.web.customer.payload.request.ChangeBalanceRequest;
import com.spring.web.customer.services.BalanceHistoryService;
import com.spring.web.customer.services.BillingCardService;
import com.spring.web.helpers.erorrs.ErrorResponse;
import com.spring.web.helpers.message.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/customer/{id}/billing/card")
public class BillingCardController {
    @Autowired
    public BillingCardService billingCardService;

    @Autowired
    public BalanceHistoryService balanceHistoryService;

    @GetMapping("/{billingId}")
    public ResponseEntity<?> getBillingCardById(@Valid @PathVariable Long id, @PathVariable Long billingId) {
        try {
            return ResponseEntity.ok(billingCardService.getByIdWithCustomer(id, billingId));
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
            return ResponseEntity.ok(billingCardService.getBillingByCustomerId(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveBillingCardData(@Valid @PathVariable Long id, @RequestBody BillingCardDTO data) {
        try {
            billingCardService.saveCustomerBillingCard(id, data);
            return ResponseEntity.ok(new MessageResponse("Save billing card success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/apply")
    public ResponseEntity<?> applyCard(@Valid @PathVariable Long id, @RequestBody ChangeBalanceRequest data) {
        try {
            balanceHistoryService.changeCustomerBalance(id, data, true);
            billingCardService.updateUsingBillingCard(data.getBillingAddressId());
            return ResponseEntity.ok(new MessageResponse("Save billing card success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/apply/history")
    public ResponseEntity<?> applyCard(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(billingCardService.getCustomerActiveBilling(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @DeleteMapping("/{billingId}")
    public ResponseEntity<?> deleteBillingCard(@Valid @PathVariable Long id, @PathVariable Long billingId) {
        try {
            billingCardService.deleteCustomerBillingCard(id, billingId);
            return ResponseEntity.ok(new MessageResponse("Delete billing card success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }
}
