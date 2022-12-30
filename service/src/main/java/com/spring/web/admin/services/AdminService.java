package com.spring.web.admin.services;

import com.spring.web.admin.models.Admin;
import com.spring.web.admin.payload.AdminDTO;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    public AdminDTO bindAdminData(Admin admin) {
        return new AdminDTO(
                admin.getId(),
                admin.getFullName(),
                admin.getPhone(),
                admin.getAddress(),
                admin.getCurrentAddress(),
                DateTimeConverter.dateToString(admin.getCreatedAt()),
                DateTimeConverter.dateToString(admin.getUpdatedAt())
        );
    }
}
