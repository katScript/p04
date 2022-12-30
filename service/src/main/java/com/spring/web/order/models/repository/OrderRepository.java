package com.spring.web.order.models.repository;

import com.spring.web.customer.models.Customer;
import com.spring.web.order.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomer(Customer customer);

    List<Order> findByCustomerId(Long id);
}
