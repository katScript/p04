package com.spring.web.admin.models.repository;

import com.spring.web.admin.models.Admin;
import com.spring.web.authentication.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Boolean existsByUser(User user);
}
