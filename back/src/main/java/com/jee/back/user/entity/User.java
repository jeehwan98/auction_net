package com.jee.back.user.entity;

import com.jee.back.products.entity.Bid;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "user_info")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "user_id", nullable = false)
    private String userId;
    @Column(name = "username", nullable = false)
    private String username;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "role", nullable = false, length = 10)
    @Enumerated(value = EnumType.STRING)
    private UserRole role;
    @Column(name = "created_date", nullable = false)
    private LocalDateTime createdDate;
    @Column(name = "image_role", nullable = true)
    private String imageUrl;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Bid> bids = new ArrayList<>();
}