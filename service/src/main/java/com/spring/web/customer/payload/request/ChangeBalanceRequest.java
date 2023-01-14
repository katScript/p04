package com.spring.web.customer.payload.request;

public class ChangeBalanceRequest {
    private Double income;
    private Long billingAddressId;

    public Double getIncome() {
        return income;
    }

    public void setIncome(Double income) {
        this.income = income;
    }

    public Long getBillingAddressId() {
        return billingAddressId;
    }

    public void setBillingAddressId(Long billingAddressId) {
        this.billingAddressId = billingAddressId;
    }
}
