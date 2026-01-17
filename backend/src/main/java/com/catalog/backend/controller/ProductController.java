package com.catalog.backend.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.catalog.backend.model.Product;
import com.catalog.backend.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @PostMapping
    public Product addProduct(
            @RequestParam String name,
            @RequestParam String description,
            @RequestParam double price,
            @RequestParam int stock,
            @RequestParam(required = false) MultipartFile image
    ) throws IOException {

        Product p = new Product();
        p.setName(name);
        p.setDescription(description);
        p.setPrice(price);
        p.setStock(stock);

        if (stock > 0) p.setStatus("Active");
        else p.setStatus("Out of Stock");

        if (image != null && !image.isEmpty()) {
            String folder = System.getProperty("user.dir") + File.separator + "uploads" + File.separator;
            File dir = new File(folder);
            if (!dir.exists()) dir.mkdirs();

            String original = image.getOriginalFilename();
            if (original == null) original = "file";

            String fileName = UUID.randomUUID() + "_" + original;
            File dest = new File(folder + fileName);
            image.transferTo(dest);

            p.setImageUrl("/images/" + fileName);
        }

        return service.createProduct(p);
    }

    @GetMapping
    public List<Product> getAll() {
        return service.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getOne(@PathVariable Long id) {
        return service.getProductById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteProduct(id);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product newData) {
        return service.updateProduct(id, newData);
    }

}
