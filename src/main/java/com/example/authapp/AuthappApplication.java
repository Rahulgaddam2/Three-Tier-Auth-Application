package com.example.authapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.security.autoconfigure.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class AuthappApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthappApplication.class, args);
	}

}
