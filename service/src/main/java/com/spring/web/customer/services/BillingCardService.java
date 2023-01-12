package com.spring.web.customer.services;

import com.spring.web.customer.models.BalanceHistory;
import com.spring.web.customer.models.BillingCard;
import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.repository.BalanceHistoryRepository;
import com.spring.web.customer.models.repository.BillingCardRepository;
import com.spring.web.customer.models.repository.CustomerRepository;
import com.spring.web.customer.payload.BillingCardDTO;
import com.spring.web.helpers.currency.Formatter;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BillingCardService {
    @Autowired
    public BillingCardRepository billingCardRepository;

    @Autowired
    public CustomerRepository customerRepository;

    @Autowired
    public BalanceHistoryRepository balanceHistoryRepository;

    public BillingCardDTO getById(Long id) {
        BillingCard billingCard = billingCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", id)));

        return bindBillingCardData(billingCard);
    }

    public BillingCardDTO getByIdWithCustomer(Long customerId, Long id) {
        BillingCard billingCard = billingCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", id)));

        if (!billingCard.getCustomer().getId().equals(customerId))
            throw new RuntimeException("Customer not valid!");

        return bindBillingCardData(billingCard);
    }

    public List<BillingCardDTO> getAll() {
        List<BillingCard> billingCards = billingCardRepository.findByActiveFalseOrderByCreatedAtDesc();
        List<BillingCardDTO> result = new ArrayList<>();

        for (BillingCard ba : billingCards) {
            result.add(bindBillingCardData(ba));
        }

        return result;
    }


    public List<BillingCardDTO> getByCustomer(Customer customer) {
        List<BillingCard> billingCards = billingCardRepository.findByCustomerOrderByCreatedAtDesc(customer);
        List<BillingCardDTO> result = new ArrayList<>();

        for (BillingCard ba : billingCards) {
            result.add(bindBillingCardData(ba));
        }

        return result;
    }

    public List<BillingCardDTO> getCustomerActiveBilling(Long id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found!"));
        List<BillingCard> billingCards = billingCardRepository.findByCustomerAndActiveTrueOrderByCreatedAtDesc(customer);
        List<BillingCardDTO> result = new ArrayList<>();

        for (BillingCard ba : billingCards) {
            result.add(bindBillingCardData(ba));
        }

        return result;
    }

    public List<BillingCardDTO> getBillingByCustomerId(Long customerId) {
        List<BillingCard> billingCards = billingCardRepository.findByCustomerIdOrderByCreatedAtDesc(customerId);
        List<BillingCardDTO> result = new ArrayList<>();

        for (BillingCard ba : billingCards) {
            result.add(bindBillingCardData(ba));
        }

        return result;
    }

    public void updateUsingBillingCard(Long billingCardId) {
        BillingCard billingCard = billingCardRepository.findById(billingCardId)
                .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", billingCardId)));

        billingCard.setActive(true);
        billingCardRepository.save(billingCard);
    }

    public void saveCustomerBillingCard(Long customerId, BillingCardDTO data) {
        BillingCard billingCard;
        if (data.getId() != null) {
            billingCard = billingCardRepository.findById(data.getId())
                    .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", data.getId())));

            if (!billingCard.getCustomer().getId().equals(customerId))
                throw new RuntimeException("Customer not valid!");
        } else {
            billingCard = new BillingCard();
        }

        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException(String.format("Customer with id %d not found!", customerId)));

        billingCard.setCode(data.getCode())
                    .setSeri(data.getSeri())
                    .setValue(data.getValue())
                    .setHost(data.getHost())
                    .setCustomer(customer);

        BillingCard result = billingCardRepository.save(billingCard);
        this.createSubmitCardHistory(customerId, result.getId());
    }

    public void deleteCustomerBillingCard(Long customerId, Long billingCardId) {
        BillingCard billingCard = billingCardRepository.findById(billingCardId)
                .orElseThrow(() -> new RuntimeException(String.format("Billing address with id %d not found!", billingCardId)));

        if (!billingCard.getCustomer().getId().equals(customerId))
            throw new RuntimeException("Customer not valid!");

        billingCardRepository.delete(billingCard);
    }

    public String getCustomerBalanceChangeDescription(Long billingCardId, Double income) {
        BillingCard BillingCard = billingCardRepository.findById(billingCardId)
                .orElse(null);

        String incomeString = Formatter.formatThousand(income);
        String description;
        if (BillingCard != null) {
            description = String.format("%s nạp %s từ thẻ %s với số serial %s",
                    BillingCard.getCustomer().getFullName(),
                    incomeString,
                    BillingCard.getHost(),
                    BillingCard.getSeri()
            );
        } else {
            description = String.format("Nạp %s với giao dịch có id %d", income, billingCardId);
        }

        return description;
    }


    public void createSubmitCardHistory(Long customerId, Long billingCardId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException(String.format("Customer with id %d not found!", customerId)));

        BillingCard billingCard = billingCardRepository.findById(billingCardId)
                .orElseThrow(() -> new RuntimeException(String.format("Billing card with id %d not found!", billingCardId)));

        String income = Formatter.formatThousand(billingCard.getValue());

        balanceHistoryRepository.save(new BalanceHistory(
                null,
                customer.getCurrentMoney(),
                0.0,
                customer.getCurrentMoney(),
                String.format("%s nhập vào card %s mệnh giá %s VND, đang chờ sử lý!", customer.getFullName(), billingCard.getHost(), income),
                customer
        ));
    }

    public BillingCardDTO bindBillingCardData(BillingCard billing) {
        return new BillingCardDTO(
                billing.getId(),
                billing.getCustomer().getId(),
                billing.getCode(),
                billing.getSeri(),
                billing.getValue(),
                billing.getHost(),
                billing.getActive(),
                DateTimeConverter.dateToString(billing.getCreatedAt()),
                DateTimeConverter.dateToString(billing.getUpdatedAt())
        );
    }
}
