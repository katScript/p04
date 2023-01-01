package com.spring.web.customer.models.repository;

import com.spring.web.authentication.models.User;
import com.spring.web.customer.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Boolean existsByUser(User user);

    Optional<Customer> findByUser(User user);
}
