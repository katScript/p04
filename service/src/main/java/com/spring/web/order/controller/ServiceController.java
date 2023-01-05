package com.spring.web.order.controller;

import com.spring.web.helpers.erorrs.ErrorResponse;
import com.spring.web.helpers.message.MessageResponse;
import com.spring.web.order.data.Category;
import com.spring.web.order.payload.ServiceDTO;
import com.spring.web.order.services.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/service")
public class ServiceController {
    @Autowired
    public BusinessService businessService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@Valid @PathVariable Long id) {
        try {
            return ResponseEntity.ok(businessService.getServiceById(id));
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
            return ResponseEntity.ok(businessService.getAllService());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<?> getServiceByCategory(@Valid @PathVariable String category) {
        try {
            return ResponseEntity.ok(businessService.getAllServiceByCategory(category));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveService(@Valid @RequestBody ServiceDTO data) {
        try {
            businessService.saveService(data);
            return ResponseEntity.ok(new MessageResponse("Save service success!"));
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
            businessService.deleteServiceById(id);
            return ResponseEntity.ok(new MessageResponse("Delete service success!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }

    @GetMapping("/category/option")
    public ResponseEntity<?> getAllCategory() {
        try {
            return ResponseEntity.ok(Category.getAlLCategoryType());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(
                    400,
                    e.getMessage(),
                    "Contact to admin for more information!")
            );
        }
    }
}
