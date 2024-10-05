package com.jee.back.products.dto;

import com.jee.back.products.entity.Bid;
import com.jee.back.products.entity.Category;
import com.jee.back.user.entity.User;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ProductDTO {
    private int productId;
    private String productName;
    private String status;
    private String description;
    private int startingPrice;
    private LocalDateTime startDate;
    private LocalDateTime expireDate;
    private String productImage;
    private Category category;
    private List<Bid> bids;
    private User user;
}
