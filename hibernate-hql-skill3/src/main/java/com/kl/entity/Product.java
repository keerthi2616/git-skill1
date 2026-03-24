package com.kl.entity;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Double price;
    private Integer quantity;
    private String description;

    // Default Constructor
    public Product() {}

    // Parameterized Constructor
    public Product(String name, Double price, Integer quantity, String description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    // Getters
    public Long getId() { return id; }
    public String getName() { return name; }
    public Double getPrice() { return price; }
    public Integer getQuantity() { return quantity; }
    public String getDescription() { return description; }

    @Override
    public String toString() {
        return id + " | " + name + " | $" + price +
                " | Qty: " + quantity + " | " + description;
    }
}