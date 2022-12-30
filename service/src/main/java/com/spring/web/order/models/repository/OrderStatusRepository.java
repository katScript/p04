package com.spring.web.order.models.repository;

import com.spring.web.order.models.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrderStatusRepository extends JpaRepository<Status, Long> {
    Optional<Status> findByCode(String code);
}
