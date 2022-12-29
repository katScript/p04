package com.spring.web.customer.services;

import com.spring.web.customer.models.BillingAddress;
import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.repository.BillingAddressRepository;
import com.spring.web.customer.payload.BillingAddressDTO;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BillingAddressService {
    @Autowired
    public BillingAddressRepository billingAddressRepository;


    public List<BillingAddressDTO> getByCustomer(Customer customer) {
        List<BillingAddress> billingAddresses = billingAddressRepository.findByCustomer(customer);
        List<BillingAddressDTO> result = new ArrayList<>();

        for (BillingAddress ba : billingAddresses) {
            result.add(bindBillingAddressData(ba));
        }

        return result;
    }

    public BillingAddressDTO bindBillingAddressData(BillingAddress billingAddress) {
        return new BillingAddressDTO(
                billingAddress.getId(),
                billingAddress.getCustomer().getId(),
                billingAddress.getType(),
                billingAddress.getBillingName(),
                billingAddress.getHolder(),
                billingAddress.getAccountNumber(),
                billingAddress.getAddress(),
                DateTimeConverter.dateToString(billingAddress.getCreatedAt()),
                DateTimeConverter.dateToString(billingAddress.getUpdatedAt())
        );
    }
}
