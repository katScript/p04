package com.spring.web.order.models;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="services")
public class ServiceBusiness {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category")
    private String category;

    @Column(name = "service_name")
    private String serviceName;

    @OneToMany(mappedBy = "service",
            fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Package> packages;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Date createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    private Date updatedAt;

    public ServiceBusiness() {
        packages = new HashSet<>();
    }

    public ServiceBusiness(
            Long id,
            String category,
            String serviceName,
            Set<Package> packages
    ) {
        this.id = id;
        this.category = category;
        this.serviceName = serviceName;
        this.packages = packages;
    }

    public Long getId() {
        return id;
    }

    public ServiceBusiness setId(Long id) {
        this.id = id;
        return this;
    }

    public String getCategory() {
        return category;
    }

    public ServiceBusiness setCategory(String category) {
        this.category = category;
        return this;
    }

    public String getServiceName() {
        return serviceName;
    }

    public ServiceBusiness setServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }

    public Set<Package> getPackages() {
        return packages;
    }

    public ServiceBusiness setPackages(Set<Package> packages) {
        this.packages = packages;
        return this;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public ServiceBusiness setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public ServiceBusiness setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}
