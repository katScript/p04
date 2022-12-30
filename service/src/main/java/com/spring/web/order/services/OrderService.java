package com.spring.web.order.services;

import com.spring.web.customer.models.Customer;
import com.spring.web.helpers.date.DateTimeConverter;
import com.spring.web.order.models.Order;
import com.spring.web.order.models.repository.OrderRepository;
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


    public List<OrderDTO> getByCustomer(Customer customer) {
        List<Order> orders = orderRepository.findByCustomer(customer);
        List<OrderDTO> result = new ArrayList<>();

        for (Order o : orders) {
            result.add(bindOrderData(o));
        }

        return result;
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
