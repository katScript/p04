package com.spring.web.order.services;

import com.spring.web.helpers.date.DateTimeConverter;
import com.spring.web.order.models.Package;
import com.spring.web.order.models.ServiceBusiness;
import com.spring.web.order.models.repository.PackageRepository;
import com.spring.web.order.models.repository.ServiceRepository;
import com.spring.web.order.payload.PackageDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PackageService {
    @Autowired
    public PackageRepository packageRepository;

    @Autowired
    public ServiceRepository serviceRepository;

    public PackageDTO getPackageById(Long id) {
        Package packageData = packageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Package with id %d not found!", id)));

        return bindPackageData(packageData);
    }

    public List<PackageDTO> getAllPackage() {
        List<Package> packages = packageRepository.findAll();
        List<PackageDTO> results = new ArrayList<>();

        for (Package p : packages) {
            results.add(bindPackageData(p));
        }

        return results;
    }

    public List<PackageDTO> getAllPackageByServiceId(Long id) {
        List<Package> packages = packageRepository.findByServiceId(id);
        List<PackageDTO> results = new ArrayList<>();

        for (Package p : packages) {
            results.add(bindPackageData(p));
        }

        return results;
    }

    public void savePackage(PackageDTO packageDTO) {
        ServiceBusiness business = serviceRepository.findById(packageDTO.getServiceId())
                .orElseThrow(() -> new RuntimeException(String.format("Service with id %d not found!", packageDTO.getServiceId())));

        packageRepository.save(bindPackageObject(packageDTO, business));
    }

    public void deletePackageById(Long id) {
        packageRepository.deleteById(id);
    }

    public Package bindPackageObject(PackageDTO data, ServiceBusiness serviceBusiness) {
        Package packageData;
        if (data.getId() != null) {
            packageData = packageRepository.findById(data.getId())
                    .orElseThrow(() -> new RuntimeException(String.format("Package with id %d not found!", data.getId())));
        } else {
            packageData = new Package();
        }

        packageData.setService(serviceBusiness)
                .setPackageName(data.getPackageName())
                .setPrice(data.getPrice())
                .setStatus(data.getStatus())
                .setNote(data.getNote());

        return packageData;
    }

    public PackageDTO bindPackageData(Package data) {
        return new PackageDTO(
                data.getId(),
                data.getService().getId(),
                data.getPackageName(),
                data.getPrice(),
                data.getStatus(),
                data.getNote(),
                DateTimeConverter.dateToString(data.getCreatedAt()),
                DateTimeConverter.dateToString(data.getUpdatedAt())
        );
    }
}
