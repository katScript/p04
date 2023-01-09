package com.spring.web.admin.services;

import com.spring.web.admin.models.Admin;
import com.spring.web.admin.models.repository.AdminRepository;
import com.spring.web.admin.payload.AdminDTO;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    public AdminRepository adminRepository;

    @Autowired
    AdminAuthService adminAuthService;

    public List<AdminDTO> getAllAdmin() {
        List<Admin> admins = adminRepository.findAll();
        List<AdminDTO> result = new ArrayList<>();

        for (Admin a : admins) {
            result.add(bindAdminData(a));
        }

        return result;
    }

    public AdminDTO getAdminById(Long id) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found!"));

        return bindAdminData(admin);
    }

    public AdminDTO getAdminByUserId(Long id) {
        Admin admin = adminRepository.findByUserId(id)
                .orElseThrow(() -> new RuntimeException("Admin not found!"));

        return bindAdminData(admin);
    }

    public void saveAdminData(AdminDTO data) {
        Admin admin;
        if (data.getId() != null) {
            admin = adminRepository.findById(data.getId())
                    .orElseThrow(() -> new RuntimeException("Admin not found!"));
        } else {
            admin = new Admin();
        }

        admin.setFullName(data.getFullName())
                .setPhone(data.getPhone())
                .setAddress(data.getAddress())
                .setCurrentAddress(data.getCurrentAddress());
        admin.getUser().setEmail(data.getEmail());

        adminRepository.save(admin);
    }

    public void deleteAdminById(Long id) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found!"));

        adminAuthService.deleteAdminAccount(admin);
    }

    public AdminDTO bindAdminData(Admin admin) {
        return new AdminDTO(
                admin.getId(),
                admin.getFullName(),
                admin.getPhone(),
                admin.getAddress(),
                admin.getCurrentAddress(),
                admin.getUser().getUserName(),
                admin.getUser().getEmail(),
                DateTimeConverter.dateToString(admin.getCreatedAt()),
                DateTimeConverter.dateToString(admin.getUpdatedAt())
        );
    }
}
