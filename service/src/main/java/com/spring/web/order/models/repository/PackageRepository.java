package com.spring.web.order.models.repository;

import com.spring.web.order.models.Package;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PackageRepository extends JpaRepository<Package, Long> {
    List<Package> findByServiceId(Long id);

    @Query("select p from Package p where p.service is null or (:id is not null and p.service.id = :id)")
    List<Package> findByServiceIsNullOrServiceId(Long id);
}
