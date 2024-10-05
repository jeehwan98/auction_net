package com.jee.back.products.service;

import com.jee.back.products.dto.CategoryDTO;
import com.jee.back.products.entity.Category;
import com.jee.back.products.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class CategoryService {
    private final ModelMapper modelMapper;
    private final CategoryRepository categoryRepository;
    /** category register */
    public Category registerCategory(CategoryDTO categoryDTO) {
        Category category = modelMapper.map(categoryDTO, Category.class);
        Optional<Category> checkForCategory = categoryRepository.findByCategoryName(categoryDTO.getCategoryName());
        if (checkForCategory.isPresent()) {
            return null;
        }

        Category registeredCategory = categoryRepository.save(category);
        return registeredCategory;
    }
}
