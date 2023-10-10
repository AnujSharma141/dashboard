package com.dashboard.dashboard.api;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.dashboard.model.User;
import com.dashboard.dashboard.service.UserService;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getUsersList(){
        return userService.getUsers();
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user){
        userService.addUser(user);
        return "added";
    }

}
