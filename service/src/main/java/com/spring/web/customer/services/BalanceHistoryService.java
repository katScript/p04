package com.spring.web.customer.services;

import com.spring.web.customer.models.BalanceHistory;
import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.repository.BalanceHistoryRepository;
import com.spring.web.customer.payload.BalanceHistoryDTO;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BalanceHistoryService {
    @Autowired
    public BalanceHistoryRepository balanceHistoryRepository;

    public BalanceHistoryDTO getHistoryById(Long id) {
        BalanceHistory balanceHistory = balanceHistoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Balance history record with id %d not found!", id)));

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
