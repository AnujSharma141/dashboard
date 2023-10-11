package com.dashboard.dashboard.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @Autowired
    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getUsersList(){
        return userService.getUsers();
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody User user){
        String email = user.getEmail();
        String password = user.getPin();
        User responseUser = userService.authenticate(email, password);
        if(responseUser == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        else return ResponseEntity.ok(responseUser);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        String email = user.getEmail();
        User checkUser = userService.userPresent(email);
        if(checkUser != null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User registered already!");
        else{
            userService.addUser(user);
            return ResponseEntity.ok().body("User registerd!");
        }
    }

}
