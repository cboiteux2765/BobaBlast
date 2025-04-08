package com.bobafinder.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.List;

@Document(collection = "boba")
public class Boba {
    @Id // primary key
    private String id;

    @NotNull
    @Size(min = 1, max = 50)
    private String name;
    
    private String description;
    private HashMap<String, List<String>> storesWithIngredients; // Store name as key, list of ingredients as value

    // Constructor
    public Boba(String id, String name, HashMap<String, List<String>> storesWithIngredients) {
        this.id = id;
        this.name = name;
        this.storesWithIngredients = storesWithIngredients;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public HashMap<String, List<String>> getStoresWithIngredients() {
        return storesWithIngredients;
    }

    public void setStoresWithIngredients(HashMap<String, List<String>> storesWithIngredients) {
        this.storesWithIngredients = storesWithIngredients;
    }

    @Override
    public String toString() {
        return "Boba{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", storesWithIngredients=" + storesWithIngredients +
                '}';
    }
}