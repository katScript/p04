package com.spring.web.order.services;

import com.spring.web.customer.models.Customer;
import com.spring.web.customer.models.repository.CustomerRepository;
import com.spring.web.helpers.date.DateTimeConverter;
import com.spring.web.order.data.OrderStatus;
import com.spring.web.order.models.Order;
import com.spring.web.order.models.Package;
import com.spring.web.order.models.Status;
import com.spring.web.order.models.repository.OrderRepository;
import com.spring.web.order.models.repository.OrderStatusRepository;
import com.spring.web.order.models.repository.PackageRepository;
import com.spring.web.order.payload.OrderDTO;
import com.spring.web.order.payload.PackageDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PackageRepository packageRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private OrderStatusRepository orderStatusRepository;

    public OrderDTO getById(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Order with id %d not found!", id)));

        return bindOrderData(order);
    }

    public OrderDTO getCustomerOrderById(Long customerId, Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Order with id %d not found!", id)));

        if (!order.getCustomer().getId().equals(customerId))
            throw new RuntimeException("Customer not valid!");

        return bindOrderData(order);
    }

    public List<OrderDTO> getAllByCustomerId(Long id) {
        List<Order> orders = orderRepository.findByCustomerId(id);
        List<OrderDTO> result = new ArrayList<>();

        for (Order o : orders) {
            result.add(bindOrderData(o));
        }

        return result;
    }

    public List<OrderDTO> getAll() {
        List<Order> orders = orderRepository.findAll();
        List<OrderDTO> result = new ArrayList<>();

        for (Order o : orders) {
            result.add(bindOrderData(o));
        }

        return result;
    }

    public List<OrderDTO> getByCustomer(Customer customer) {
        List<Order> orders = orderRepository.findByCustomer(customer);
        List<OrderDTO> result = new ArrayList<>();

        for (Order o : orders) {
            result.add(bindOrderData(o));
        }

        return result;
    }

    public void placeOrder(OrderDTO orderDTO) {
        Order order = bindOrderObject(orderDTO);

        setOrderStatus(order, OrderStatus.PLACE_ORDER);
        orderRepository.save(order);
    }

    public void saveOrder(OrderDTO orderDTO) {
        Order order = bindOrderObject(orderDTO);

        setOrderStatus(order, orderDTO.getStatus());
        orderRepository.save(order);
    }

    public void cancelOrderById(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Order with id %d not found!", id)));

        Customer customer = order.getCustomer();

        Double subtotal = order.getSubtotal(),
                customerCurrentMoney = customer.getCurrentMoney();

        customer.setCurrentMoney(subtotal + customerCurrentMoney);
        changeOrderStatus(order, OrderStatus.CANCEL);
    }

    public void changeOrderStatus(Order order, String status) {
        setOrderStatus(order, status);
        orderRepository.save(order);
    }

    private void setOrderStatus(Order order, String statusCode) {
        Status status = orderStatusRepository.findByCode(statusCode)
                .orElseThrow(() -> new RuntimeException(String.format("Order status %s not found!", statusCode)));

        order.setStatus(status)
                .setStatusDetail(status.getCode());
    }

    private void processBillingData(Order order, OrderDTO data) {
        Package item = order.getItem();

        order.setQty(data.getQty())
                .setSubtotal(data.getQty() * item.getPrice())
                .setDiscountPrice(0.0);
    }

    public Order bindOrderObject(OrderDTO data) {
        Order order;
        if (data.getId() != null) {
            order = orderRepository.findById(data.getId())
                    .orElseThrow(() -> new RuntimeException(String.format("Order with id %d not found!", data.getId())));
        } else {
            order = new Order();
        }

        Customer customer = customerRepository.findById(data.getCustomerId())
                .orElseThrow(() -> new RuntimeException(String.format("Customer with id %d not found!", data.getCustomerId())));

        Package packageData = packageRepository.findById(data.getItem().getId())
                .orElseThrow(() -> new RuntimeException(String.format("Package with id %d not found!", data.getItem().getId())));

        order.setCustomer(customer)
                .setItem(packageData)
                .setTarget(data.getTarget())
                .setNote(data.getNote());

        processBillingData(order, data);

        return order;
    }

    public OrderDTO bindOrderData(Order order) {
        return new OrderDTO(
                order.getId(),
                order.getCustomer().getId(),
                new PackageDTO(),
                order.getTarget(),
                order.getStatusDetail(),
                order.getQty(),
                order.getSubtotal(),
                order.getCouponCode(),
                order.getDiscountPrice(),
                order.getNote(),
                DateTimeConverter.dateToString(order.getCreatedAt()),
                DateTimeConverter.dateToString(order.getUpdatedAt())
        );
    }
}
