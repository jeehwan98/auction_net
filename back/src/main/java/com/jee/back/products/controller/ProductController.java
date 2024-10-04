package com.jee.back.products.controller;

import com.jee.back.common.AuthenticatedUser;
import com.jee.back.products.dto.ProductDTO;
import com.jee.back.products.entity.Category;
import com.jee.back.products.entity.Products;
import com.jee.back.products.repository.CategoryRepository;
import com.jee.back.products.repository.ProductRepository;
import com.jee.back.products.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    @GetMapping("")
    public ResponseEntity<?> fetchAllProducts() {
        List<Products> allProducts = productRepository.findAll();
        log.info("🩷🩷🩷🩷logged in user:: " + AuthenticatedUser.fetchUserInfo());
        log.info("all products: " + allProducts);
        return ResponseEntity.ok(allProducts);
    }

    @PostMapping("")
    public ResponseEntity<?> registerProduct(@RequestBody ProductDTO productDTO) {
        log.info("logged productDTO: " + productDTO);
        productDTO.setStatus("active"); // active default
//        productDTO.setUser(AuthenticatedUser.fetchUserInfo());
        Map<String, Object> responseMap = new HashMap<>();

        Optional<Category> category = categoryRepository.findByCategoryName("shoes");
        if (category.isPresent()) {
            Category categoryFetched = category.get();
            productDTO.setCategory(categoryFetched);
        }

        Products registeredProduct = productService.registerProduct(productDTO);
        if (registeredProduct == null) {
            responseMap.put("error", "error trying to register product details");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseMap);
        }

        responseMap.put("message", registeredProduct);
        return ResponseEntity.ok().body(responseMap);
    }
}