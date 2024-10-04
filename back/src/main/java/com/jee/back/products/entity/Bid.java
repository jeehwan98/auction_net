package com.jee.back.products.entity;

import com.jee.back.user.entity.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "bid")
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "bid_id")
    private int bidId;
    @Column(name = "bid_amount", nullable = false)
    private int bidAmount;
    @Column(name = "bid_date", nullable = false)
    private LocalDateTime bidDate;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products product;
}
