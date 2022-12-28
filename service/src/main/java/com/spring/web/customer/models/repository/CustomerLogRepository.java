package com.spring.web.customer.models.repository;

import com.spring.web.customer.models.Log;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerLogRepository extends JpaRepository<Log, Long> {
}
