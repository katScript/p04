package com.spring.web.customer.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class BillingCardDTO {
    private Long id;

    @NotNull
    @NotBlank
    private Long customerId;

    @NotNull
    @NotBlank(message = "Code can not empty!")
    private String code;

    @NotNull
    @NotBlank(message = "Seri can not empty!")
    private String seri;

    @NotNull
    @NotBlank(message = "Value can not empty!")
    private Double value;

    @NotNull
    @NotBlank(message = "Host name can not empty!")
    private String host;

    private Boolean active;

    private String createdAt;

    private String updatedAt;

    public BillingCardDTO() {}

    public BillingCardDTO(
            Long id,
            Long customerId,
            String code,
            String seri,
            Double value,
            String host,
            Boolean active,
            String createdAt,
            String updatedAt
    ) {
        this.id = id;
        this.customerId = customerId;
        this.code = code;
        this.seri = seri;
        this.value = value;
        this.host = host;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getSeri() {
        return seri;
    }

    public void setSeri(String seri) {
        this.seri = seri;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
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

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}
