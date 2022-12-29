package com.spring.web.email.services;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.spring.web.email.models.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImp implements MailService
{
    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendEmail(Mail mail)
    {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setSubject(mail.getMailSubject());
            mimeMessageHelper.setFrom(new InternetAddress(mail.getMailFrom()));
            mimeMessageHelper.setTo(mail.getMailTo());

            MimeMessage message = mimeMessageHelper.getMimeMessage();
            message.setContent(mail.getMailContent(), "text/html");

            javaMailSender.send(message);
        }
        catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    public Mail prepareEmailData(
            String mailFrom,
            String mailTo,
            String subject,
            String content
    ) {
        Mail mail = new Mail();
        mail.setMailFrom(mailFrom);
        mail.setMailTo(mailTo);
        mail.setMailSubject(subject);
        mail.setMailContent(content);

        return mail;
    }
}