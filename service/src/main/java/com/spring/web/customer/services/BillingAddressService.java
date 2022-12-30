package com.spring.web.customer.services;

import com.spring.web.customer.models.BillingAddress;
import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.repository.BillingAddressRepository;
import com.spring.web.customer.models.repository.CustomerRepository;
import com.spring.web.customer.payload.BillingAddressDTO;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BillingAddressService {
    @Autowired
    private BillingAddressRepository billingAddressRepository;

    @Autowired
    private CustomerRepository customerRepository;

    public BillingAddressDTO getById(Long customerId, Long id) {
        BillingAddress billingAddress = billingAddressRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", id)));

        if (!billingAddress.getCustomer().getId().equals(customerId))
            throw new RuntimeException("Customer not valid!");

        return bindBillingAddressData(billingAddress);
    }

    public List<BillingAddressDTO> getByCustomer(Customer customer) {
        List<BillingAddress> billingAddresses = billingAddressRepository.findByCustomer(customer);
        List<BillingAddressDTO> result = new ArrayList<>();

        for (BillingAddress ba : billingAddresses) {
            result.add(bindBillingAddressData(ba));
        }

        return result;
    }

    public List<BillingAddressDTO> getBillingByCustomerId(Long customerId) {
        List<BillingAddress> billingAddresses = billingAddressRepository.findByCustomerId(customerId);
        List<BillingAddressDTO> result = new ArrayList<>();

        for (BillingAddress ba : billingAddresses) {
            result.add(bindBillingAddressData(ba));
        }

        return result;
    }

    public void saveCustomerBillingAddress(Long customerId, BillingAddressDTO data) {
        BillingAddress billingAddress;
        if (data.getId() != null) {
            billingAddress = billingAddressRepository.findById(data.getId())
                    .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", data.getId())));
        } else {
            billingAddress = new BillingAddress();
        }

        if (!billingAddress.getCustomer().getId().equals(customerId))
            throw new RuntimeException("Customer not valid!");

        Customer customer = customerRepository.findById(customerId)
                        .orElseThrow(() -> new RuntimeException(String.format("Customer with id %d not found!", customerId)));

        billingAddress.setType(data.getType())
                .setBillingName(data.getBillingName())
                .setHolder(data.getHolder())
                .setAccountNumber(data.getAccountNumber())
                .setAddress(data.getAddress())
                .setCustomer(customer);

        billingAddressRepository.save(billingAddress);
    }

    public void deleteCustomerBillingAddress(Long customerId, Long billingAddressId) {
        BillingAddress billingAddress = billingAddressRepository.findById(billingAddressId)
                .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", billingAddressId)));

        if (!billingAddress.getCustomer().getId().equals(customerId))
            throw new RuntimeException("Customer not valid!");

        billingAddressRepository.delete(billingAddress);
    }

    public String getCustomerBalanceChangeDescription(Long billingAddressId, Double income) {
        BillingAddress billingAddress = billingAddressRepository.findById(billingAddressId)
                .orElse(null);

        String description;
        if (billingAddress != null) {
            description = String.format("%s recharge %f from %s with account %s",
                    billingAddress.getCustomer().getFullName(),
                    income,
                    billingAddress.getBillingName(),
                    billingAddress.getAccountNumber()
            );
        } else {
            description = String.format("Recharge %f by billing address id %d", income, billingAddressId);
        }

        return description;
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
