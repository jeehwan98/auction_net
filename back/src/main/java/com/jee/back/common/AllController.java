package com.jee.back.common;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/all")
public class AllController {

//    @PostMapping("/upload-image")
//    public ResponseEntity<?> uploadImage(@RequestParam("imageUrl") MultipartFile imageUrl) {
//        String uploadDir = "images/";
//        String fileName = StringUtils.cleanPath(imageUrl.getOriginalFilename());
//
//        try {
//            File dir = new File(uploadDir);
//            if (!dir.exists()) {
//                dir.mkdirs();
//            }
//
//            imageUrl.transferTo(new File(uploadDir + fileName));
//
//        }
//    }
}
