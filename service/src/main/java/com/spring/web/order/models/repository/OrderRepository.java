package com.spring.web.order.models.repository;

import com.spring.web.customer.models.Customer;
import com.spring.web.order.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomer(Customer customer);

    List<Order> findByCustomerId(Long id);
}
