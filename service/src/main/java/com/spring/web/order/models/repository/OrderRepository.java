package com.spring.web.order.models.repository;

import com.spring.web.customer.models.Customer;
import com.spring.web.order.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomer(Customer customer);

    List<Order> findByCustomerIdOrderByCreatedAtDesc(Long id);

    @Query("select o from Order o where o.customer.id = :customerId and o.item.service.id = :serviceId")
    List<Order> findByCustomerIdAndServiceId(Long customerId, Long serviceId);

    @Query("select o from Order o order by o.createdAt desc")
    List<Order> findAllOrderByCreatedAtDesc();
}
