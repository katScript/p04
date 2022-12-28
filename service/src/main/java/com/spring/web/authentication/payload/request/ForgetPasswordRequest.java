package com.spring.web.authentication.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class ForgetPasswordRequest {

    @NotNull
    @NotBlank(message = "Username can not empty!")
    private String userName;

    @NotNull
    @NotBlank(message = "Email can not empty!")
    private String email;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
