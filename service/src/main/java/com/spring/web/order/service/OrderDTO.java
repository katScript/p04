package com.spring.web.order.service;

public class OrderDTO {
    private Long id;

    private Long customerId;

    private PackageDTO item;

    private String target;

    private String status;

    private Integer qty;

    private Double subtotal;

    private String couponCode;

    private Double discountPrice;

    private String note;

    private String createdAt;

    private String updatedAt;

    public OrderDTO() {}

    public OrderDTO(
            Long id,
            Long customerId,
            PackageDTO item,
            String target,
            String status,
            Integer qty,
            Double subtotal,
            String couponCode,
            Double discountPrice,
            String note,
            String createdAt,
            String updatedAt
    ) {
        this.id = id;
        this.customerId = customerId;
        this.item = item;
        this.target = target;
        this.status = status;
        this.qty = qty;
        this.subtotal = subtotal;
        this.couponCode = couponCode;
        this.discountPrice = discountPrice;
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

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public PackageDTO getItem() {
        return item;
    }

    public void setItem(PackageDTO item) {
        this.item = item;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getQty() {
        return qty;
    }

    public void setQty(Integer qty) {
        this.qty = qty;
    }

    public Double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(Double subtotal) {
        this.subtotal = subtotal;
    }

    public String getCouponCode() {
        return couponCode;
    }

    public void setCouponCode(String couponCode) {
        this.couponCode = couponCode;
    }

    public Double getDiscountPrice() {
        return discountPrice;
    }

    public void setDiscountPrice(Double discountPrice) {
        this.discountPrice = discountPrice;
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
