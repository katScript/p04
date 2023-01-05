package com.spring.web.order.services;

import com.spring.web.helpers.date.DateTimeConverter;
import com.spring.web.order.models.Package;
import com.spring.web.order.models.ServiceBusiness;
import com.spring.web.order.models.repository.ServiceRepository;
import com.spring.web.order.payload.PackageDTO;
import com.spring.web.order.payload.ServiceDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class BusinessService {
    @Autowired
    public ServiceRepository serviceRepository;

    @Autowired
    public PackageService packageService;

    public ServiceDTO getServiceById(Long id) {
        ServiceBusiness serviceBusiness = serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Service with id %d not found!", id)));

        ServiceDTO serviceDTO = bindServiceData(serviceBusiness);
        for (Package p : serviceBusiness.getPackages()) {
            serviceDTO.getItems().add(packageService.bindPackageData(p));
        }

        return serviceDTO;
    }

    public List<ServiceDTO> getAllService() {
        List<ServiceBusiness> serviceBusinesses = serviceRepository.findAll();
        List<ServiceDTO> results = new ArrayList<>();

        for (ServiceBusiness sb: serviceBusinesses) {
            results.add(bindServiceData(sb));
        }

        return results;
    }

    public List<ServiceDTO> getAllServiceByCategory(String category) {
        List<ServiceBusiness> serviceBusinesses = serviceRepository.findByCategory(category);
        List<ServiceDTO> results = new ArrayList<>();

        for (ServiceBusiness sb: serviceBusinesses) {
            results.add(bindServiceData(sb));
        }

        return results;
    }

    public void saveService(ServiceDTO data) {
        serviceRepository.save(bindServiceObject(data));
    }

    public void deleteServiceById(Long id) {
        ServiceBusiness serviceBusiness = serviceRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException(String.format("Service with id %d not found!", id)));

        for (Package pk : serviceBusiness.getPackages()) {
            packageService.unTrackPackage(pk);
        }

        serviceBusiness.getPackages().clear();
        serviceRepository.delete(serviceBusiness);
    }

    public ServiceBusiness bindServiceObject(ServiceDTO data) {
        ServiceBusiness serviceBusiness;
        if (data.getId() != null) {
            serviceBusiness = serviceRepository.findById(data.getId())
                    .orElseThrow(() -> new RuntimeException(String.format("Service with id %d not found!", data.getId())));
        } else {
            serviceBusiness = new ServiceBusiness();
        }

        for (Package pk : serviceBusiness.getPackages()) {
            packageService.unTrackPackage(pk);
        }

        Set<Package> items = new HashSet<>();
        for (PackageDTO pd : data.getItems()) {
            items.add(packageService.getPackageObject(pd).setService(serviceBusiness));
        }

        serviceBusiness.setCategory(data.getCategory())
                .setServiceName(data.getServiceName());

        serviceBusiness.setPackages(items);
        return serviceBusiness;
    }

    public ServiceDTO bindServiceData(ServiceBusiness serviceBusiness) {
        return new ServiceDTO(
                serviceBusiness.getId(),
                serviceBusiness.getCategory(),
                serviceBusiness.getServiceName(),
                new ArrayList<>(),
                DateTimeConverter.dateToString(serviceBusiness.getCreatedAt()),
                DateTimeConverter.dateToString(serviceBusiness.getUpdatedAt())
        );
    }
}
