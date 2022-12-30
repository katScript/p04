package com.spring.web.customer.models.repository;

import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.Log;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerLogRepository extends JpaRepository<Log, Long> {
    List<Log> findByCustomer(Customer customer);
    List<Log> findByCustomerId(Long id);
}
