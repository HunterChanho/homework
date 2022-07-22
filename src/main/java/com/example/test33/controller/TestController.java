package com.example.test33.controller;

import com.example.test33.service.TestService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class TestController {
    private final TestService testService;
    
    @PostMapping("/getData")
    public void getData() {
        log.info("controller 시작");
        testService.getData();
    }
}
