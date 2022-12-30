package com.spring.web.order.models.repository;

import com.spring.web.order.models.ServiceBusiness;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<ServiceBusiness, Long> {
}
