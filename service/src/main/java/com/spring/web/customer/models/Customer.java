package com.spring.web.customer.models;

import com.spring.web.authentication.models.User;
import com.spring.web.order.models.Order;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="customers")
public class Customer {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "subscription")
    private Boolean subscription;

    @Column(name = "current_money")
    private Double currentMoney;

    @Column(name = "total_money")
    private Double totalMoney;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "customer",
            fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<BalanceHistory> balanceHistories;

    @OneToMany(mappedBy = "customer",
            fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<BillingAddress> billingAddresses;

    @OneToMany(mappedBy = "customer",
            fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Order> orders;

    @OneToMany(mappedBy = "customer",
            fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Log> logs;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Date createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    private Date updatedAt;

    public Customer() {
        balanceHistories = new HashSet<>();
        billingAddresses = new HashSet<>();
        orders = new HashSet<>();
        logs = new HashSet<>();
    }

    public Customer(
            Long id,
            String fullName,
            String phone,
            String email,
            Boolean subscription,
            Double currentMoney,
            Double totalMoney,
            User user,
            Set<BalanceHistory> balanceHistories,
            Set<BillingAddress> billingAddresses,
            Set<Order> orders,
            Set<Log> logs
    ) {
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
        this.subscription = subscription;
        this.currentMoney = currentMoney;
        this.totalMoney = totalMoney;
        this.user = user;
        this.balanceHistories = balanceHistories;
        this.billingAddresses = billingAddresses;
        this.orders = orders;
        this.logs = logs;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getSubscription() {
        return subscription;
    }

    public void setSubscription(Boolean subscription) {
        this.subscription = subscription;
    }

    public Double getCurrentMoney() {
        return currentMoney;
    }

    public void setCurrentMoney(Double currentMoney) {
        this.currentMoney = currentMoney;
    }

    public Double getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Double totalMoney) {
        this.totalMoney = totalMoney;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<BalanceHistory> getBalanceHistories() {
        return balanceHistories;
    }

    public void setBalanceHistories(Set<BalanceHistory> balanceHistories) {
        this.balanceHistories = balanceHistories;
    }

    public Set<BillingAddress> getBillingAddresses() {
        return billingAddresses;
    }

    public void setBillingAddresses(Set<BillingAddress> billingAddresses) {
        this.billingAddresses = billingAddresses;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    public Set<Log> getLogs() {
        return logs;
    }

    public void setLogs(Set<Log> logs) {
        this.logs = logs;
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
