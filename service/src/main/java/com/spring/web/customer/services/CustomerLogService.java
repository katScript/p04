package com.spring.web.customer.services;

import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.Log;
import com.spring.web.customer.models.repository.CustomerLogRepository;
import com.spring.web.customer.payload.CustomerLogDTO;
import com.spring.web.helpers.date.DateTimeConverter;
import com.spring.web.order.models.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerLogService {
    @Autowired
    private CustomerLogRepository customerLogRepository;

    public CustomerLogDTO getByLogId(Long customerId, Long logId) {
        Log customerLog = customerLogRepository.findById(logId)
                .orElseThrow(() -> new RuntimeException("Log id not found!"));

        if (!customerLog.getCustomer().getId().equals(customerId))
            throw new RuntimeException("Customer not valid!");

        return bindCustomerLogData(customerLog);
    }

    public List<CustomerLogDTO> getAllByCustomerId(Long customerId) {
        List<Log> customerLogs = customerLogRepository.findByCustomerId(customerId);
        List<CustomerLogDTO> result = new ArrayList<>();

        for (Log cL : customerLogs) {
            result.add(bindCustomerLogData(cL));
        }

        return result;
    }

    public void createCustomerLog(Customer customer, Order order, String description) {
        customerLogRepository.save(new Log(
                null,
                customer,
                order,
                customer.getCurrentMoney() + order.getSubtotal(),
                customer.getCurrentMoney(),
                order.getSubtotal(),
                description
        ));
    }

    public List<CustomerLogDTO> getByCustomer(Customer customer) {
        List<Log> customerLogs = customerLogRepository.findByCustomer(customer);
        List<CustomerLogDTO> result = new ArrayList<>();

        for (Log cL : customerLogs) {
            result.add(bindCustomerLogData(cL));
        }

        return result;
    }

    public CustomerLogDTO bindCustomerLogData(Log log) {
        return new CustomerLogDTO(
                log.getId(),
                log.getCustomer().getId(),
                log.getBalance(),
                log.getNewBalance(),
                log.getTransactionValue(),
                log.getDescription(),
                DateTimeConverter.dateToString(log.getCreatedAt()),
                DateTimeConverter.dateToString(log.getUpdatedAt())
        );
    }
}
