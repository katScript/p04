package com.spring.web.admin.models.repository;

import com.spring.web.admin.models.Admin;
import com.spring.web.authentication.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    Boolean existsByUser(User user);

    Optional<Admin> findByUserId(Long id);
}
