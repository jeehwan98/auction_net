package com.jee.back.user.controller;

import com.jee.back.common.AuthenticatedUser;
import com.jee.back.user.entity.User;
import com.jee.back.user.repository.UserRepository;
import com.jee.back.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @GetMapping("")
    public ResponseEntity<?> fetchCurrentUser() {
        User user = AuthenticatedUser.fetchUserInfo();
        log.info("currently logged in user: " + user);
        return ResponseEntity.ok().body(user);
    }

    @GetMapping("/all")
//    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public ResponseEntity<List<User>> fetchAllUsers() {
        List<User> allUsers = userRepository.findAll();
        return ResponseEntity.ok().body(allUsers);
    }
}
