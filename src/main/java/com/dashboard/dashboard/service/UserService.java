package com.dashboard.dashboard.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import com.dashboard.dashboard.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dashboard.dashboard.dao.UserRepository;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    
    public List<User> getUsers(){
        List<User> exposed = userRepository.findAll();
        List<User> safe = exposed.stream().map(user->{
            User safeUser = new User();
            safeUser.setEmail(user.getEmail());
            safeUser.setAge(user.getAge());
            return safeUser;
        }).collect(Collectors.toList());
        return safe;
    }

    public void addUser(User user){
        userRepository.save(user);
    }

    public User authenticate(String email, String password){
        User user = userRepository.findByEmail(email);
        if(user != null && user.getPin().equals(password)){
            return user;
        }
        return null;
    }

    public User userPresent(String email){
        User user = userRepository.findByEmail(email);
        return user;
    }
}
