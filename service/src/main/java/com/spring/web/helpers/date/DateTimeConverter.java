package com.spring.web.helpers.date;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class DateTimeConverter {
    public static String FORMAT = "yyyy-MM-dd HH:mm:ss";
    public static String START_DATE = "2020-01-01 00:00:00";

    public static String dateToString(Date date) {
        if (date == null)
            return "";

        return date.toInstant()
                .atZone(ZoneId.of("Asia/Saigon")).toLocalDateTime()
                .format(DateTimeFormatter.ofPattern(FORMAT));
    }

    public static Date stringToDate(String date) {
        if (date == null || date.equals(""))
            return null;

        try {
            return new SimpleDateFormat(FORMAT).parse(date);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }
}
