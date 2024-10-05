package com.jee.back.products.dto;

import com.jee.back.products.entity.Products;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CategoryDTO {
    private int categoryId;
    private String categoryName;
}
