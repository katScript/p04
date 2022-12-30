package com.spring.web.order.models.repository;

import com.spring.web.order.models.Package;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PackageRepository extends JpaRepository<Package, Long> {
    List<Package> findByServiceId(Long id);
}
