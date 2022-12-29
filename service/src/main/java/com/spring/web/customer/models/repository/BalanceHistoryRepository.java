package com.spring.web.customer.models.repository;

import com.spring.web.customer.models.BalanceHistory;
import com.spring.web.customer.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BalanceHistoryRepository extends JpaRepository<BalanceHistory, Long> {
    List<BalanceHistory> findByCustomer(Customer customer);

    List<BalanceHistory> findByCustomerId(Long id);
}
