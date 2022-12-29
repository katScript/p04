package com.spring.web.email.services;


import com.spring.web.email.models.Mail;

public interface MailService {
    public void sendEmail(Mail mail);
}
