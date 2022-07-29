package com.example.test33.controller;

import com.example.test33.model.DataRequest;
import com.example.test33.service.TestService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class TestController {
    private final TestService testService;

    @GetMapping("/getData")
    public JSONArray getData(DataRequest dataRequest,
                             @RequestParam("likeItmsNm") String likeItmsNm,
                             @RequestParam("basDt") String basDt
    ) {
        log.info("controller 시작");
        return testService.getData(dataRequest, likeItmsNm, basDt);
    }

}