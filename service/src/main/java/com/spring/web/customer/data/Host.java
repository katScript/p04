package com.spring.web.customer.data;

import com.spring.web.helpers.Option;

import java.util.ArrayList;
import java.util.List;

public class Host {
    private static final String[] VALUE = {"viettel", "mobifone", "vietnamobile", "vinaphone"};
    private static final String[] LABEL = {"Viettel", "MobiFone", "Vietnamobile", "Vinaphone"};


    public static List<Option> getAlLHostOption() {
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
