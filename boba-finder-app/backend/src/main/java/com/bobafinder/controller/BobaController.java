package com.bobafinder.controller;

import com.bobafinder.model.Boba;
import com.bobafinder.service.BobaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/boba")
public class BobaController {

    @Autowired
    private BobaService bobaService;

    @GetMapping
    public ResponseEntity<List<Boba>> getAllBoba() {
        return ResponseEntity.ok(bobaService.getAllBoba());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Boba> getBobaById(@PathVariable String id) {
        return ResponseEntity.ok(bobaService.getBobaById(id));
    }

    @PostMapping
    public ResponseEntity<Boba> createBoba(@RequestBody Boba boba) {
        return ResponseEntity.ok(bobaService.createBoba(boba));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Boba> updateBoba(@PathVariable String id, @RequestBody Boba boba) {
        return ResponseEntity.ok(bobaService.updateBoba(id, boba));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBoba(@PathVariable String id) {
        bobaService.deleteBoba(id);
        return ResponseEntity.noContent().build();
    }
}