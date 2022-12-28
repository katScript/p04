package com.spring.web.customer.models.repository;

import com.spring.web.customer.models.BillingAddress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillingAddressRepository extends JpaRepository<BillingAddress, Long> {
}
