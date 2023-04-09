package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class GptApiController {
    @Autowired
    private GptApiService gptApiService;

    @GetMapping(value = "/gpt-api", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> ChatGptAPi(@RequestParam(value = "prompt") String prompt) {
        try {
            String jsonResponse = gptApiService.getGptRawResponse(prompt);
            return ResponseEntity.ok().body(jsonResponse);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"" + e.getMessage() + "\"}");
        }
    }
}
