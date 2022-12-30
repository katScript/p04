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
import java.util.List;

@Service
public class BusinessService {
    @Autowired
    public ServiceRepository serviceRepository;

    @Autowired
    public PackageService packageService;

    public ServiceDTO getServiceById(Long id) {
        ServiceBusiness serviceBusiness = serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Service with id %d not found!", id)));

        return bindServiceData(serviceBusiness);
    }

    public List<ServiceDTO> getAllService() {
        List<ServiceBusiness> serviceBusinesses = serviceRepository.findAll();
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
        serviceRepository.deleteById(id);
    }

    public ServiceBusiness bindServiceObject(ServiceDTO data) {
        ServiceBusiness serviceBusiness;
        if (data.getId() != null) {
            serviceBusiness = serviceRepository.findById(data.getId())
                    .orElseThrow(() -> new RuntimeException(String.format("Service with id %d not found!", data.getId())));
        } else {
            serviceBusiness = new ServiceBusiness();
        }

        List<Package> items = new ArrayList<>();
        for (PackageDTO pd : data.getItems()) {
            items.add(packageService.bindPackageObject(pd, serviceBusiness));
        }

        serviceBusiness.setCategory(data.getCategory())
                .setServiceName(data.getServiceName());
        serviceBusiness.getPackages().clear();
        serviceBusiness.getPackages().addAll(items);

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
