package com.spring.web.customer.models.repository;

import com.spring.web.customer.models.BillingAddress;
import com.spring.web.customer.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BillingAddressRepository extends JpaRepository<BillingAddress, Long> {
    List<BillingAddress> findByCustomer(Customer customer);

    List<BillingAddress> findByCustomerId(Long id);
}
