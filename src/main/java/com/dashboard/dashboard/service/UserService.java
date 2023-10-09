package com.dashboard.dashboard.service;

import java.util.List;

import com.dashboard.dashboard.model.User;
import org.springframework.stereotype.Service;

import com.dashboard.dashboard.dao.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public void addUser(User user){
        userRepository.save(user);
    }

    public int userPresent(){
        return 1;
    }
}
