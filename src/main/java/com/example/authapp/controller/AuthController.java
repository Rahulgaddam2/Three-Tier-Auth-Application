package com.example.authapp.controller;

import com.example.authapp.dto.LoginRequest;
import com.example.authapp.dto.SignupRequest;
import com.example.authapp.entity.User;
import com.example.authapp.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        User user = userService.register(
                request.getUsername(),
                request.getPassword()
        );
        return ResponseEntity.ok("User registered successfully");
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        User user = userService.login(
                request.getUsername(),
                request.getPassword()
        );
        return ResponseEntity.ok("Login successful");
    }
}
