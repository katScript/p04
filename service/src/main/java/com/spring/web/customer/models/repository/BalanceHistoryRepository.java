package com.spring.web.customer.models.repository;

import com.spring.web.customer.models.BalanceHistory;
import com.spring.web.customer.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BalanceHistoryRepository extends JpaRepository<BalanceHistory, Long> {
    @Query("select b from BalanceHistory b where b.customer = ?1")
    List<BalanceHistory> findByCustomerOrderByCreatedAtDesc(Customer customer);

    List<BalanceHistory> findByCustomerIdOrderByCreatedAtDesc(Long id);
}
