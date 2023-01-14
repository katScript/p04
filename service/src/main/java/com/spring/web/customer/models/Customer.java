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
    public static final String ROLE = "customer";
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

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "customer",
            fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<BalanceHistory> balanceHistories;

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
        this.orders = orders;
        this.logs = logs;
    }

    public Long getId() {
        return id;
    }

    public Customer setId(Long id) {
        this.id = id;
        return this;
    }

    public String getFullName() {
        return fullName;
    }

    public Customer setFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }

    public String getPhone() {
        return phone;
    }

    public Customer setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public Customer setEmail(String email) {
        this.email = email;
        return this;
    }

    public Boolean getSubscription() {
        return subscription;
    }

    public Customer setSubscription(Boolean subscription) {
        this.subscription = subscription;
        return this;
    }

    public Double getCurrentMoney() {
        return currentMoney;
    }

    public Customer setCurrentMoney(Double currentMoney) {
        this.currentMoney = currentMoney;
        return this;
    }

    public Double getTotalMoney() {
        return totalMoney;
    }

    public Customer setTotalMoney(Double totalMoney) {
        this.totalMoney = totalMoney;
        return this;
    }

    public User getUser() {
        return user;
    }

    public Customer setUser(User user) {
        this.user = user;
        return this;
    }

    public Set<BalanceHistory> getBalanceHistories() {
        return balanceHistories;
    }

    public Customer setBalanceHistories(Set<BalanceHistory> balanceHistories) {
        this.balanceHistories = balanceHistories;
        return this;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public Customer setOrders(Set<Order> orders) {
        this.orders = orders;
        return this;
    }

    public Set<Log> getLogs() {
        return logs;
    }

    public Customer setLogs(Set<Log> logs) {
        this.logs = logs;
        return this;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Customer setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public Customer setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}
