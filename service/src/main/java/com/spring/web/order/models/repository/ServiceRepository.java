package com.spring.web.order.models.repository;

import com.spring.web.order.models.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Long> {
}
