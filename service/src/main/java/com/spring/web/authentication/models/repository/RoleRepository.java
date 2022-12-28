package com.spring.web.authentication.models.repository;

import com.spring.web.authentication.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
