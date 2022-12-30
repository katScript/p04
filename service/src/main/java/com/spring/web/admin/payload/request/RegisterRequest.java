package com.spring.web.admin.payload.request;

import com.spring.web.admin.payload.AdminDTO;

public class RegisterRequest {
    private String username;

    private String password;

    private String email;

    private AdminDTO adminData;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public AdminDTO getAdminData() {
        return adminData;
    }

    public void setAdminData(AdminDTO adminData) {
        this.adminData = adminData;
    }
}
