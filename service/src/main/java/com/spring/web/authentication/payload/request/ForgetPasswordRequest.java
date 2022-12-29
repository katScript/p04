package com.spring.web.authentication.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class ForgetPasswordRequest {
    @NotNull
    @NotBlank(message = "Username can not empty!")
    private String userName;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
