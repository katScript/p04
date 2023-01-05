package com.spring.web.authentication.services;

import com.spring.web.authentication.models.Role;
import com.spring.web.authentication.models.User;
import com.spring.web.authentication.models.repository.UserRepository;
import com.spring.web.authentication.payload.UserDTO;
import com.spring.web.helpers.date.DateTimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class UserService {
    @Autowired
    public UserRepository userRepository;

    public UserDTO getById(Long id) {
        User user = this.userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("User with id %d not found!", id)));

        return bindUserData(user);
    }

    public List<UserDTO> getAll() {
        List<User> userList = this.userRepository.findAll();
        List<UserDTO> result = new ArrayList<>();

        for (User user: userList) {
            result.add(bindUserData(user));
        }

        return result;
    }

    public UserDTO bindUserData(User user) {
        Iterator<Role> iter = user.getRoles().iterator();

        return new UserDTO(
                user.getId(),
                user.getUserName(),
                user.getAvatar(),
                user.getEmail(),
                iter.next().getCode(),
                DateTimeConverter.dateToString(user.getCreatedAt()),
                DateTimeConverter.dateToString(user.getUpdatedAt())
        );
    }
}
