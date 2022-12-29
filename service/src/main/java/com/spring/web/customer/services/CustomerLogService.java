package com.spring.web.customer.services;

import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.Log;
import com.spring.web.customer.models.repository.CustomerLogRepository;
import com.spring.web.customer.payload.CustomerLogDTO;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerLogService {
    @Autowired
    private CustomerLogRepository customerLogRepository;


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
