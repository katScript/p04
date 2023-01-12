package com.spring.web.customer.services;

import com.spring.web.authentication.models.User;
import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.repository.CustomerRepository;
import com.spring.web.customer.payload.CustomerDTO;
import com.spring.web.helpers.currency.Formatter;
import com.spring.web.helpers.date.DateTimeConverter;
import com.spring.web.order.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private BalanceHistoryService balanceHistoryService;

    @Autowired
    private BillingAddressService billingAddressService;

    @Autowired
    private CustomerLogService customerLogService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private CustomerAuthService customerAuthService;

    @Autowired
    private CustomerRepository customerRepository;

    public CustomerDTO getCustomerById(Long id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Customer with id %d not found!", id)));

        CustomerDTO customerData = bindCustomerData(customer);
        customerData.setOrders(orderService.getByCustomer(customer));
        customerData.setCustomerLog(customerLogService.getByCustomer(customer));
        customerData.setBalanceHistory(balanceHistoryService.getByCustomer(customer));
        customerData.setBillingAddress(billingAddressService.getByCustomer(customer));

        return customerData;
    }

    public CustomerDTO getCustomerByUserId(Long id) {
        User user = customerAuthService.findByUserId(id);
        Customer customer = customerRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException(String.format("Customer with id %d not found!", id)));

        return bindCustomerData(customer);
    }

    public List<CustomerDTO> getAllCustomer() {
        List<Customer> customers = customerRepository.findAll();
        List<CustomerDTO> results = new ArrayList<>();

        for (Customer c : customers) {
            results.add(bindCustomerData(c));
        }

        return results;
    }

    public void deleteCustomerById(Long id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Customer with id %d not found!", id)));

        customerAuthService.deleteCustomerAccount(customer);
    }

    public void saveCustomerData(CustomerDTO data) {
        Customer customer;
        if (data.getId() != null) {
            customer = customerRepository.findById(data.getId())
                    .orElseThrow(() -> new RuntimeException(String.format("Customer with id %d not found!", data.getId())));
        } else {
            customer = new Customer();
        }

        customer.setFullName(data.getFullName())
                .setEmail(data.getEmail())
                .setPhone(data.getPhone())
                .setSubscription(data.getSubscription());

        customerRepository.save(customer);
    }

    public CustomerDTO bindCustomerData(Customer customer) {
        return new CustomerDTO(
                customer.getId(),
                customer.getFullName(),
                customer.getPhone(),
                customer.getEmail(),
                customer.getSubscription(),
                Formatter.roundCurrency(customer.getCurrentMoney()),
                customer.getTotalMoney(),
                new ArrayList<>(),
                new ArrayList<>(),
                new ArrayList<>(),
                new ArrayList<>(),
                customer.getUser().getUserName(),
                DateTimeConverter.dateToString(customer.getCreatedAt()),
                DateTimeConverter.dateToString(customer.getUpdatedAt())
        );
    }
}
