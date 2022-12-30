package com.spring.web.customer.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="customers_billing_address")
public class BillingAddress {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type")
    private String type;

    @Column(name = "billing_name")
    private String billingName;

    @Column(name = "holder")
    private String holder;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "address")
    private String address;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="customer_id", referencedColumnName = "id", nullable = false)
    private Customer customer;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Date createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    private Date updatedAt;

    public BillingAddress() {}

    public BillingAddress(
            Long id,
            String type,
            String billingName,
            String holder,
            String accountNumber,
            String address,
            Customer customer
    ) {
        this.id = id;
        this.type = type;
        this.billingName = billingName;
        this.holder = holder;
        this.accountNumber = accountNumber;
        this.address = address;
        this.customer = customer;
    }

    public Long getId() {
        return id;
    }

    public BillingAddress setId(Long id) {
        this.id = id;
        return this;
    }

    public String getType() {
        return type;
    }

    public BillingAddress setType(String type) {
        this.type = type;
        return this;
    }

    public String getBillingName() {
        return billingName;
    }

    public BillingAddress setBillingName(String billingName) {
        this.billingName = billingName;
        return this;
    }

    public String getHolder() {
        return holder;
    }

    public BillingAddress setHolder(String holder) {
        this.holder = holder;
        return this;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public BillingAddress setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }

    public String getAddress() {
        return address;
    }

    public BillingAddress setAddress(String address) {
        this.address = address;
        return this;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public BillingAddress setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public BillingAddress setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    public Customer getCustomer() {
        return customer;
    }

    public BillingAddress setCustomer(Customer customer) {
        this.customer = customer;
        return this;
    }
}
