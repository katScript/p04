package com.spring.web.customer.services;

import com.spring.web.customer.models.BalanceHistory;
import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.repository.BalanceHistoryRepository;
import com.spring.web.customer.models.repository.CustomerRepository;
import com.spring.web.customer.payload.BalanceHistoryDTO;
import com.spring.web.customer.payload.request.ChangeBalanceRequest;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BalanceHistoryService {
    @Autowired
    public CustomerRepository customerRepository;

    @Autowired
    public BalanceHistoryRepository balanceHistoryRepository;

    @Autowired
    public BillingAddressService billingAddressService;

    public BalanceHistoryDTO getHistoryById(Long customerId, Long id) {
        BalanceHistory balanceHistory = balanceHistoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Balance history record with id %d not found!", id)));

        if (!balanceHistory.getCustomer().getId().equals(customerId))
            throw new RuntimeException("Customer not match!");

        return bindBalanceHistoryData(balanceHistory);
    }

    public List<BalanceHistoryDTO> getAllHistoryByCustomerId(Long customerId) {
        List<BalanceHistory> balanceHistories = balanceHistoryRepository.findByCustomerId(customerId);
        List<BalanceHistoryDTO> result = new ArrayList<>();

        for (BalanceHistory bh: balanceHistories) {
            result.add(bindBalanceHistoryData(bh));
        }

        return result;
    }

    public List<BalanceHistoryDTO> getByCustomer(Customer customer) {
        List<BalanceHistory> balanceHistories = balanceHistoryRepository.findByCustomer(customer);
        List<BalanceHistoryDTO> result = new ArrayList<>();

        for (BalanceHistory bh : balanceHistories) {
            result.add(bindBalanceHistoryData(bh));
        }

        return result;
    }

    public void changeCustomerBalance(Long customerId, ChangeBalanceRequest cbr) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException(String.format("Customer with id %d not found!", customerId)));

        Double total = customer.getTotalMoney(),
                current = customer.getCurrentMoney();

        customer.setTotalMoney(total + cbr.getIncome())
                .setCurrentMoney(current + cbr.getIncome());

        customer.getBalanceHistories().add(new BalanceHistory(
                null,
                current,
                cbr.getIncome(),
                current + cbr.getIncome(),
                billingAddressService.getCustomerBalanceChangeDescription(
                        cbr.getBillingAddressId(),
                        cbr.getIncome()
                ),
                customer
        ));

        customerRepository.save(customer);
    }

    public BalanceHistoryDTO bindBalanceHistoryData(BalanceHistory balanceHistory) {
        return new BalanceHistoryDTO(
                balanceHistory.getId(),
                balanceHistory.getCustomer().getId(),
                balanceHistory.getBalance(),
                balanceHistory.getBalanceIncome(),
                balanceHistory.getNewBalance(),
                balanceHistory.getDescription(),
                DateTimeConverter.dateToString(balanceHistory.getCreatedAt()),
                DateTimeConverter.dateToString(balanceHistory.getUpdatedAt())
        );
    }
}
