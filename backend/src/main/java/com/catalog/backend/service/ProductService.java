package com.catalog.backend.service;

import com.catalog.backend.model.Product;
import com.catalog.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo){
        this.repo = repo;
    }

    public Product createProduct(Product p){
        return repo.save(p);
    }

    public List<Product> getAllProducts(){
        return repo.findAll();
    }

    public Product getProductById(Long id){
        return repo.findById(id).orElseThrow();
    }

    public Product updateProduct(Long id, Product newData){
        Product old = getProductById(id);
        old.setName(newData.getName());
        old.setDescription(newData.getDescription());
        old.setPrice(newData.getPrice());
        old.setStock(newData.getStock());
        if (newData.getStock() > 0) old.setStatus("Active");
        else old.setStatus("Out of Stock");
        old.setImageUrl(newData.getImageUrl());
        return repo.save(old);
    }

    public void deleteProduct(Long id){
        repo.deleteById(id);
    }
}
