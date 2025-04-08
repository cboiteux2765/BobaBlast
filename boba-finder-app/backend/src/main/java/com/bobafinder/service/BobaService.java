package com.bobafinder.service;

import com.bobafinder.exception.ResourceNotFoundException;
import com.bobafinder.model.Boba;
import com.bobafinder.repository.BobaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BobaService {

    @Autowired
    private BobaRepository bobaRepository;

    public List<Boba> getAllBoba() {
        return bobaRepository.findAll();
    }

    public Boba getBobaById(String id) {
        return bobaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Boba not found with id: " + id));
    }

    public Boba createBoba(Boba boba) {
        return bobaRepository.save(boba);
    }

    public Boba updateBoba(String id, Boba updatedBoba) {
        if (!bobaRepository.existsById(id)) {
            throw new ResourceNotFoundException("Boba not found with id: " + id);
        }
        updatedBoba.setId(id); // Ensure the ID remains the same
        return bobaRepository.save(updatedBoba);
    }

    public void deleteBoba(String id) {
        if (!bobaRepository.existsById(id)) {
            throw new ResourceNotFoundException("Boba not found with id: " + id);
        }
        bobaRepository.deleteById(id);
    }
}