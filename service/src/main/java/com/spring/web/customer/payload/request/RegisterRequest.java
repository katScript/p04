package com.spring.web.customer.payload.request;

import com.spring.web.customer.payload.CustomerDTO;

public class RegisterRequest {
    private String username;

    private String password;

    private String email;

    private CustomerDTO customerData;

    public RegisterRequest() {}

    public RegisterRequest(
            String username,
            String password,
            String email,
            CustomerDTO customerData
    ) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.customerData = customerData;
    }

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

    public CustomerDTO getCustomerData() {
        return customerData;
    }

    public void setCustomerData(CustomerDTO customerData) {
        this.customerData = customerData;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
