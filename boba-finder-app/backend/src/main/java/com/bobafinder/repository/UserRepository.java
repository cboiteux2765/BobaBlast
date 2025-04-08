package com.bobafinder.repository;

import com.bobafinder.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
    User findByEmail(String email);
    User findById(String id);
    void deleteById(String id);
    void deleteByUsername(String username);
    void deleteByEmail(String email);
}