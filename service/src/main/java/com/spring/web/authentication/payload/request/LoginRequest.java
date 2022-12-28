package com.spring.web.authentication.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class LoginRequest {
    @NotNull
    @NotBlank(message = "Username can not empty!")
    private String userName;

    @NotNull
    @NotBlank(message = "Password can not empty!")
    private String password;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
