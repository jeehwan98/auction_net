package com.jee.back.products.dto;

import com.jee.back.products.entity.Products;
import com.jee.back.user.entity.User;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BidDTO {

    private int bidId;
    private int bidAmount;
    private LocalDateTime bidDate;
    private User user;
    private Products products;
}
