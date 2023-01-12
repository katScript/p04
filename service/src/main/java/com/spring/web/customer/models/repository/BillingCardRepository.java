package com.spring.web.customer.models.repository;

import com.spring.web.customer.models.BillingCard;
import com.spring.web.customer.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillingCardRepository extends JpaRepository<BillingCard, Long> {

    List<BillingCard> findByActiveFalseOrderByCreatedAtDesc();

    List<BillingCard> findByCustomerOrderByCreatedAtDesc(Customer customer);

    List<BillingCard> findByCustomerAndActiveTrueOrderByCreatedAtDesc(Customer customer);

    List<BillingCard> findByCustomerIdOrderByCreatedAtDesc(Long id);
}
