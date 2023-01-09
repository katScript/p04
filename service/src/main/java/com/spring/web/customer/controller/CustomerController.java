package com.spring.web.customer.controller;

import com.spring.web.customer.data.BillingType;
import com.spring.web.customer.data.Host;
import com.spring.web.customer.payload.CustomerDTO;
import com.spring.web.customer.services.CustomerService;
import com.spring.web.helpers.erorrs.ErrorResponse;
import com.spring.web.helpers.message.MessageResponse;
import com.spring.web.order.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/customer")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @GetMapping("/all")
    public ResponseEntity<?> getAllCustomer() {
        try {
            return ResponseEntity.ok(customerService.getAllCustomer());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to supper admin for more information!")
            );
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCustomerById(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(customerService.getCustomerById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getCustomerByUserId(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(customerService.getCustomerByUserId(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@Valid @RequestBody CustomerDTO customerDTO) {
        try {
            customerService.saveCustomerData(customerDTO);
            return ResponseEntity.ok(new MessageResponse("Save customer success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@Valid @PathVariable Long id) {
        try {
            customerService.deleteCustomerById(id);
            return ResponseEntity.ok(new MessageResponse("Delete customer success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/billing/type")
    public ResponseEntity<?> getBillingType() {
        try {
            return ResponseEntity.ok(BillingType.getAlLBillingType());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/billing/card/host")
    public ResponseEntity<?> getHostOption() {
        try {
            return ResponseEntity.ok(Host.getAlLHostOption());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }
}
