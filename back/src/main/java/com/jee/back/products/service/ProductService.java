package com.jee.back.products.service;

import com.jee.back.products.dto.ProductDTO;
import com.jee.back.products.entity.Products;
import com.jee.back.products.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductService {
    private final ModelMapper modelMapper;
    private final ProductRepository productRepository;

    public Products registerProduct(ProductDTO productDTO) {
        Products products = modelMapper.map(productDTO, Products.class);
        Products registeredProduct = productRepository.save(products);
        return registeredProduct;
    }
}
