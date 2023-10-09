package com.dashboard.dashboard.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;
    private String email;
    private String pin;
    private int age;

    public User(String email, String pin, int age){
        this.email = email;
        this.pin = pin;
        this.age = age;
    }

    public User() {
    }

    public User(String email, int age){
        this.email = email;
        this.age = age;
    }

    public String getEmail(){
        return this.email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getPin(){
        return this.pin;
    }

   public void setPin(String pin){
        this.pin = pin;
    }


    public int getAge(){
        return this.age;
    }

   public void setAge(int age){
        this.age = age;
    }

    public int getUid(){
        return this.uid;
    }

   public void setUid(int age){
        this.age = uid;
    }

}

