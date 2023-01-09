package com.spring.web.customer.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="customers_billing_card")
public class BillingCard {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code")
    private String code;

    @Column(name = "seri")
    private String seri;

    @Column(name = "value")
    private Double value;

    @Column(name = "host")
    private String host;

    @Column(name = "active")
    private Boolean active;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="customer_id", referencedColumnName = "id", nullable = false)
    private Customer customer;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Date createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    private Date updatedAt;

    public BillingCard() {}
    
    public BillingCard(
            Long id, 
            String code,
            String seri,
            Double value,
            String host,
            Boolean active,
            Customer customer
    ) {
        this.id = id;
        this.code = code;
        this.seri = seri;
        this.value = value;
        this.host = host;
        this.active = active;
        this.customer = customer;
    }
    
    public Long getId() {
        return id;
    }

    public BillingCard setId(Long id) {
        this.id = id;
        return this;
    }

    public String getCode() {
        return code;
    }

    public BillingCard setCode(String code) {
        this.code = code;
        return this;
    }

    public String getSeri() {
        return seri;
    }

    public BillingCard setSeri(String seri) {
        this.seri = seri;
        return this;
    }

    public Double getValue() {
        return value;
    }

    public BillingCard setValue(Double value) {
        this.value = value;
        return this;
    }

    public String getHost() {
        return host;
    }

    public BillingCard setHost(String host) {
        this.host = host;
        return this;
    }

    public Customer getCustomer() {
        return customer;
    }

    public BillingCard setCustomer(Customer customer) {
        this.customer = customer;
        return this;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public BillingCard setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public BillingCard setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    public Boolean getActive() {
        return active;
    }

    public BillingCard setActive(Boolean active) {
        this.active = active;
        return this;
    }
}
