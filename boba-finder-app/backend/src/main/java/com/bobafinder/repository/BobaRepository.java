package com.bobafinder.repository;

import com.bobafinder.model.Boba;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BobaRepository extends MongoRepository<Boba, String> {
    Boba findByName(String name);
    Boba findById(String id);
    void deleteById(String id);
    void deleteByName(String name);
}