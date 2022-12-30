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

    public Order setId(Long id) {
        this.id = id;
        return this;
    }

    public Customer getCustomer() {
        return customer;
    }

    public Order setCustomer(Customer customer) {
        this.customer = customer;
        return this;
    }

    public Package getItem() {
        return item;
    }

    public Order setItem(Package item) {
        this.item = item;
        return this;
    }

    public String getTarget() {
        return target;
    }

    public Order setTarget(String target) {
        this.target = target;
        return this;
    }

    public Status getStatus() {
        return status;
    }

    public Order setStatus(Status status) {
        this.status = status;
        return this;
    }

    public String getStatusDetail() {
        return statusDetail;
    }

    public Order setStatusDetail(String statusDetail) {
        this.statusDetail = statusDetail;
        return this;
    }

    public Integer getQty() {
        return qty;
    }

    public Order setQty(Integer qty) {
        this.qty = qty;
        return this;
    }

    public Double getSubtotal() {
        return subtotal;
    }

    public Order setSubtotal(Double subtotal) {
        this.subtotal = subtotal;
        return this;
    }

    public String getCouponCode() {
        return couponCode;
    }

    public Order setCouponCode(String couponCode) {
        this.couponCode = couponCode;
        return this;
    }

    public Double getDiscountPrice() {
        return discountPrice;
    }

    public Order setDiscountPrice(Double discountPrice) {
        this.discountPrice = discountPrice;
        return this;
    }

    public String getNote() {
        return note;
    }

    public Order setNote(String note) {
        this.note = note;
        return this;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Order setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public Order setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}
