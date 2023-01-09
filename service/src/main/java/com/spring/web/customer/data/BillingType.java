package com.spring.web.customer.data;

import com.spring.web.helpers.Option;

import java.util.ArrayList;
import java.util.List;

public class BillingType {
    private static final String[] VALUE = {"bank", "paypal", "momo", "zalopay", "mobile", "other"};
    private static final String[] LABEL = {"Ngân hàng", "Paypal", "Momo", "ZaloPay", "Mobile banking", "Khác"};


    public static List<Option> getAlLBillingType() {
        List<Option> list = new ArrayList<>();

        for (int i = 0; i < VALUE.length; ++i) {
            list.add(new Option(
                    VALUE[i],
                    LABEL[i]
            ));
        }

        return list;
    }
}
