package com.spring.web.order.controller;

import com.spring.web.helpers.erorrs.ErrorResponse;
import com.spring.web.helpers.message.MessageResponse;
import com.spring.web.order.payload.OrderDTO;
import com.spring.web.order.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/order")
public class OrderController {
    @Autowired
    public OrderService orderService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(orderService.getById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/{id}/customer/{customerId}")
    public ResponseEntity<?> getCustomerOrderById(@Valid @PathVariable Long id, @PathVariable Long customerId) {
        try {
            return ResponseEntity.ok(orderService.getCustomerOrderById(customerId, id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<?> getAlByCustomerId(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(orderService.getAllByCustomerId(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll() {
        try {
            return ResponseEntity.ok(orderService.getAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/place")
    public ResponseEntity<?> placeOrder(@Valid @RequestBody OrderDTO orderDTO) {
        try {
            orderService.placeOrder(orderDTO);

            return ResponseEntity.ok(new MessageResponse("Place order success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveOrder(@Valid @RequestBody OrderDTO orderDTO) {
        try {
            orderService.saveOrder(orderDTO);
            return ResponseEntity.ok(new MessageResponse("Save order success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/cancel/{id}")
    public ResponseEntity<?> cancelOrder(@Valid @PathVariable Long id) {
        try {
            orderService.cancelOrderById(id);
            return ResponseEntity.ok(new MessageResponse("Cancel order success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }
}
