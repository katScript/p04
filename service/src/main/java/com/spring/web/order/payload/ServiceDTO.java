package com.spring.web.order.payload;

import java.util.List;

public class ServiceDTO {
    private Long id;

    private String category;

    private String serviceName;

    private List<PackageDTO> items;

    private String createdAt;

    private String updatedAt;

    public ServiceDTO() {}

    public ServiceDTO(
            Long id,
            String category,
            String serviceName,
            List<PackageDTO> items,
            String createdAt,
            String updatedAt
    ) {
        this.id = id;
        this.category = category;
        this.serviceName = serviceName;
        this.items = items;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public List<PackageDTO> getItems() {
        return items;
    }

    public void setItems(List<PackageDTO> items) {
        this.items = items;
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
