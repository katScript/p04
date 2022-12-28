package com.spring.web.customer.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="customers_balance_history")
public class BalanceHistory {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "balance")
    private Double balance;

    @Column(name = "balance_income")
    private Double balanceIncome;

    @Column(name = "new_balance")
    private Double newBalance;

    @Column(name = "description")
    private String description;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="customer_id", referencedColumnName = "id", nullable = false)
    private Customer customer;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Date createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    private Date updatedAt;

    public BalanceHistory() {}

    public BalanceHistory(
            Long id,
            Double balance,
            Double balanceIncome,
            Double newBalance,
            String description,
            Customer customer
    ) {
        this.id = id;
        this.balance = balance;
        this.balanceIncome = balanceIncome;
        this.newBalance = newBalance;
        this.description = description;
        this.customer = customer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
