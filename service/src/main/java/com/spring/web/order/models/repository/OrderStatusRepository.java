package com.spring.web.order.models.repository;

import com.spring.web.order.models.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderStatusRepository extends JpaRepository<Status, Long> {
    Optional<Status> findByCode(String code);
}
