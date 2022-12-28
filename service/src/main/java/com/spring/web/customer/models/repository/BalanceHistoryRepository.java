package com.spring.web.customer.models.repository;

import com.spring.web.customer.models.BalanceHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BalanceHistoryRepository extends JpaRepository<BalanceHistory, Long> {
}
