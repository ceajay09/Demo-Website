package com.example.myproject.service;

import com.example.myproject.model.HomepageConfig;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

@Service
public class HomepageConfigService {

    private final ObjectMapper objectMapper;

    @Value("${app.content.homepage-config-path}")
    private String homepageConfigPath;

    public HomepageConfigService(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public HomepageConfig getHomepageConfig() throws IOException {
        if (homepageConfigPath.startsWith("classpath:")) {
            String resourcePath = homepageConfigPath.replace("classpath:", "");
            try (InputStream inputStream = new ClassPathResource(resourcePath).getInputStream()) {
                return objectMapper.readValue(inputStream, HomepageConfig.class);
            }
        }

        File file = new File(homepageConfigPath);
        return objectMapper.readValue(file, HomepageConfig.class);
    }
}