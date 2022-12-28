package com.spring.web.order.models;

import com.spring.web.customer.models.Customer;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="orders")
public class Order {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="customer_id", referencedColumnName = "id", nullable = false)
    private Customer customer;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="package_id", referencedColumnName = "id", nullable = false)
    private Package item;

    @Column(name = "target")
    private String target;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="status_id", referencedColumnName = "id", nullable = false)
    private Status status;

    @Column(name = "status")
    private String statusDetail;

    @Column(name = "qty")
    private Integer qty;

    @Column(name = "subtotal")
    private Double subtotal;

    @Column(name = "coupon_code")
    private String couponCode;

    @Column(name = "discount_price")
    private Double discountPrice;

    @Column(name = "note")
    private String note;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Date createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    private Date updatedAt;

    public Order() {}

    public Order(
            Long id,
            Customer customer,
            Package item,
            String target,
            Status status,
            String statusDetail,
            Integer qty,
            Double subtotal,
            String couponCode,
            Double discountPrice,
            String note
    ) {
        this.id = id;
        this.customer = customer;
        this.item = item;
        this.target = target;
        this.status = status;
        this.statusDetail = statusDetail;
        this.qty = qty;
        this.subtotal = subtotal;
        this.couponCode = couponCode;
        this.discountPrice = discountPrice;
        this.note = note;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Package getItem() {
        return item;
    }

    public void setItem(Package item) {
        this.item = item;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getStatusDetail() {
        return statusDetail;
    }

    public void setStatusDetail(String statusDetail) {
        this.statusDetail = statusDetail;
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

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
