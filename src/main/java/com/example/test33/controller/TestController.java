package com.example.test33.controller;

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

    // 주식 리스트 조회
    @GetMapping("/getDataList")
    public JSONArray getDataList(
            @RequestParam("likeItmsNm") String likeItmsNm,
            @RequestParam("beginBasDt") String beginBasDt,
            @RequestParam("endBasDt") String endBasDt
    ) {
        log.info("getDataList controller 시작");
        return testService.getDataList(likeItmsNm, beginBasDt, endBasDt);
    }

    // 주식 배당금 조회
    @GetMapping("/getDvdnAmt")
    public JSONArray getDvdnAm() {
        log.info("getDvdnAm controller 시작");
        return testService.getDvdnAmt();
    }
}