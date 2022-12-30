package com.spring.web.order.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="services_package")
public class Package {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="service_id", referencedColumnName = "id", nullable = false)
    private ServiceBusiness service;

    @Column(name = "package_name")
    private String packageName;

    @Column(name = "price")
    private Double price;

    @Column(name = "status")
    private String status;

    @Column(name = "note")
    private String note;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Date createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    private Date updatedAt;

    public Package() {}

    public Package(
            Long id,
            ServiceBusiness service,
            String packageName,
            Double price,
            String status,
            String note
    ) {
        this.id = id;
        this.service = service;
        this.packageName = packageName;
        this.price = price;
        this.status = status;
        this.note = note;
    }

    public Long getId() {
        return id;
    }

    public Package setId(Long id) {
        this.id = id;
        return this;
    }

    public ServiceBusiness getService() {
        return service;
    }

    public Package setService(ServiceBusiness service) {
        this.service = service;
        return this;
    }

    public String getPackageName() {
        return packageName;
    }

    public Package setPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }

    public Double getPrice() {
        return price;
    }

    public Package setPrice(Double price) {
        this.price = price;
        return this;
    }

    public String getStatus() {
        return status;
    }

    public Package setStatus(String status) {
        this.status = status;
        return this;
    }

    public String getNote() {
        return note;
    }

    public Package setNote(String note) {
        this.note = note;
        return this;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Package setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public Package setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}
