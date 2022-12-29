package com.spring.web.order.service;

public class PackageDTO {
    private Long id;

    private String packageName;

    private Double price;

    private String status;

    private String note;

    private String createdAt;

    private String updatedAt;

    public PackageDTO() {}

    public PackageDTO(
            Long id,
            String packageName,
            Double price,
            String status,
            String note,
            String createdAt,
            String updatedAt
    ) {
        this.id = id;
        this.packageName = packageName;
        this.price = price;
        this.status = status;
        this.note = note;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
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
