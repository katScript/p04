package com.spring.web.admin.services;

import com.spring.web.admin.models.BillingAddress;
import com.spring.web.customer.models.Customer;
import com.spring.web.admin.models.repository.BillingAddressRepository;
import com.spring.web.admin.payload.BillingAddressDTO;
import com.spring.web.helpers.currency.Formatter;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BillingAddressService {
    @Autowired
    private BillingAddressRepository billingAddressRepository;

    public BillingAddressDTO getById(Long id) {
        BillingAddress billingAddress = billingAddressRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", id)));

        return bindBillingAddressData(billingAddress);
    }

    public List<BillingAddressDTO> getAllBillingAddress() {
        List<BillingAddress> billingAddresses = billingAddressRepository.findAll();
        List<BillingAddressDTO> result = new ArrayList<>();

        for (BillingAddress ba : billingAddresses) {
            result.add(bindBillingAddressData(ba));
        }

        return result;
    }

    public void saveCustomerBillingAddress(BillingAddressDTO data) {
        BillingAddress billingAddress;
        if (data.getId() != null) {
            billingAddress = billingAddressRepository.findById(data.getId())
                    .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", data.getId())));
        } else {
            billingAddress = new BillingAddress();
        }

        billingAddress.setType(data.getType())
                .setBillingName(data.getBillingName())
                .setHolder(data.getHolder())
                .setAccountNumber(data.getAccountNumber())
                .setAddress(data.getAddress());

        billingAddressRepository.save(billingAddress);
    }

    public void deleteCustomerBillingAddress(Long billingAddressId) {
        BillingAddress billingAddress = billingAddressRepository.findById(billingAddressId)
                .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", billingAddressId)));

        billingAddressRepository.delete(billingAddress);
    }

    public String getCustomerBalanceChangeDescription(Customer customer, Long billingAddressId, Double income) {
        BillingAddress billingAddress = billingAddressRepository.findById(billingAddressId)
                .orElse(null);

        String incomeString = Formatter.formatThousand(income);
        String description;
        if (billingAddress != null) {
            description = String.format("%s nạp %s tới %s với tài khoản %s",
                    customer.getFullName(),
                    incomeString,
                    billingAddress.getBillingName(),
                    billingAddress.getAccountNumber()
            );
        } else {
            description = String.format("Nạp %s tới tài khoản có id %d", income, billingAddressId);
        }

        return description;
    }

    public BillingAddressDTO bindBillingAddressData(BillingAddress billingAddress) {
        return new BillingAddressDTO(
                billingAddress.getId(),
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
