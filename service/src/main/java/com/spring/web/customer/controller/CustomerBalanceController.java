package com.spring.web.customer.controller;

import com.spring.web.customer.payload.request.ChangeBalanceRequest;
import com.spring.web.customer.services.BalanceHistoryService;
import com.spring.web.helpers.erorrs.ErrorResponse;
import com.spring.web.helpers.message.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/customer/{id}/balance")
public class CustomerBalanceController {
    @Autowired
    public BalanceHistoryService balanceHistoryService;

    @PostMapping("/change")
    public ResponseEntity<?> changeCustomerBalance(@Valid @PathVariable Long id, @RequestBody ChangeBalanceRequest cbr) {
        try {
            balanceHistoryService.changeCustomerBalance(id, cbr);
            return ResponseEntity.ok(new MessageResponse("Change customer balance success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/{balanceId}")
    public ResponseEntity<?> getBalanceById(@Valid @PathVariable Long id, @PathVariable Long balanceId) {
        try {
            return ResponseEntity.ok(balanceHistoryService.getHistoryById(id, balanceId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllBalance(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(balanceHistoryService.getAllHistoryByCustomerId(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }


}
