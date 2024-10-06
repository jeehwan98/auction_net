package com.jee.back.products.repository;

import com.jee.back.products.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Products, Integer> {
    List<Products> findAllByUserId(int userId);
}
