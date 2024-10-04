package com.jee.back.products.controller;

import com.jee.back.products.dto.CategoryDTO;
import com.jee.back.products.entity.Category;
import com.jee.back.products.repository.CategoryRepository;
import com.jee.back.products.service.CategoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/category")
public class CategoryController {

    private final CategoryService categoryService;
    private final CategoryRepository categoryRepository;

    @PostMapping("")
    public ResponseEntity<Map<String, String>> uploadCategory(@RequestBody CategoryDTO categoryDTO) {
        Map<String, String> responseMap = new HashMap<>();
        log.info("inputted category to be saved: " + categoryDTO);
        Category category = categoryService.registerCategory(categoryDTO);
        if (category == null) {
            responseMap.put("error", "category '" + categoryDTO.getCategoryName() + "' already exists");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseMap);
        }

        responseMap.put("message", category.toString());
        return ResponseEntity.ok().body(responseMap);
    }

    @GetMapping("")
    public ResponseEntity<List<Category>> fetchAllCategories() {
        List<Category> allCategories = categoryRepository.findAll();
        return ResponseEntity.ok(allCategories);
    }

}
