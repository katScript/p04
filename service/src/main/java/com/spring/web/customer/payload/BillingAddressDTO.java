package com.spring.web.customer.payload;

public class BillingAddressDTO {
    private Long id;

    private Long customerId;

    private String type;

    private String billingName;

    private String holder;

    private String accountNumber;

    private String address;

    private String createdAt;

    private String updatedAt;

    public BillingAddressDTO() {}

    public BillingAddressDTO(
            Long id,
            Long customerId,
            String type,
            String billingName,
            String holder,
            String accountNumber,
            String address,
            String createdAt,
            String updatedAt
    ) {
        this.id = id;
        this.customerId = customerId;
        this.type = type;
        this.billingName = billingName;
        this.holder = holder;
        this.accountNumber = accountNumber;
        this.address = address;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBillingName() {
        return billingName;
    }

    public void setBillingName(String billingName) {
        this.billingName = billingName;
    }

    public String getHolder() {
        return holder;
    }

    public void setHolder(String holder) {
        this.holder = holder;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }
}