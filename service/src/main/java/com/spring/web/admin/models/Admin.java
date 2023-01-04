package com.spring.web.admin.models;

import com.spring.web.authentication.models.User;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="admin")
public class Admin {
    public static final String ROLE = "admin";
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "current_address")
    private String currentAddress;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Date createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    private Date updatedAt;

    public Admin() {}

    public Admin(
            Long id,
            User user,
            String fullName,
            String phone,
            String address,
            String currentAddress
    ) {
        this.id = id;
        this.user = user;
        this.fullName = fullName;
        this.phone = phone;
        this.address = address;
        this.currentAddress = currentAddress;
    }

    public Long getId() {
        return id;
    }

    public Admin setId(Long id) {
        this.id = id;
        return this;
    }

    public User getUser() {
        return user;
    }

    public Admin setUser(User user) {
        this.user = user;
        return this;
    }

    public String getFullName() {
        return fullName;
    }

    public Admin setFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }

    public String getPhone() {
        return phone;
    }

    public Admin setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public String getAddress() {
        return address;
    }

    public Admin setAddress(String address) {
        this.address = address;
        return this;
    }

    public String getCurrentAddress() {
        return currentAddress;
    }

    public Admin setCurrentAddress(String currentAddress) {
        this.currentAddress = currentAddress;
        return this;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Admin setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public Admin setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}
