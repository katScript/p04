package com.spring.web.customer.payload;

public class BalanceHistoryDTO {
    private Long id;

    private Long customerId;

    private Double balance;

    private Double balanceIncome;

    private Double newBalance;

    private String description;

    private String createdAt;

    private String updatedAt;

    public BalanceHistoryDTO() {}

    public BalanceHistoryDTO(
            Long id,
            Long customerId,
            Double balance,
            Double balanceIncome,
            Double newBalance,
            String description,
            String createdAt,
            String updatedAt
    ) {
        this.id = id;
        this.customerId = customerId;
        this.balance = balance;
        this.balanceIncome = balanceIncome;
        this.newBalance = newBalance;
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

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Double getBalanceIncome() {
        return balanceIncome;
    }

    public void setBalanceIncome(Double balanceIncome) {
        this.balanceIncome = balanceIncome;
    }

    public Double getNewBalance() {
        return newBalance;
    }

    public void setNewBalance(Double newBalance) {
        this.newBalance = newBalance;
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
