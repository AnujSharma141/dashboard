package com.dashboard.dashboard.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<com.dashboard.dashboard.model.User, Integer>{
    
}
