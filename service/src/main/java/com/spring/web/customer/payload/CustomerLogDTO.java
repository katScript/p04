package com.spring.web.customer.payload;

import java.util.Date;

public class CustomerLogDTO {
    private Long id;

    private Long orderId;

    private Double balance;

    private Double newBalance;

    private Double transactionValue;

    private String description;

    private String createdAt;

    private String updatedAt;

    public CustomerLogDTO() {}

    public CustomerLogDTO(
            Long id,
            Long orderId,
            Double balance,
            Double newBalance,
            Double transactionValue,
            String description,
            String createdAt,
            String updatedAt
    ) {
        this.id = id;
        this.orderId = orderId;
        this.newBalance = newBalance;
        this.balance = balance;
        this.transactionValue = transactionValue;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Double getNewBalance() {
        return newBalance;
    }

    public void setNewBalance(Double newBalance) {
        this.newBalance = newBalance;
    }

    public Double getTransactionValue() {
        return transactionValue;
    }

    public void setTransactionValue(Double transactionValue) {
        this.transactionValue = transactionValue;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
