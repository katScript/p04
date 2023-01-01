package com.spring.web.customer.models.repository;

import com.spring.web.customer.models.BillingAddress;
import com.spring.web.customer.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillingAddressRepository extends JpaRepository<BillingAddress, Long> {
    List<BillingAddress> findByCustomer(Customer customer);

    List<BillingAddress> findByCustomerId(Long id);
}
