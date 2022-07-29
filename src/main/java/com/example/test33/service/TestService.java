package com.example.test33.service;

import com.example.test33.model.DataRequest;
import lombok.extern.slf4j.Slf4j;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLEncoder;


@Service
@Slf4j
public class TestService {
    public JSONArray getData(DataRequest dataRequest, String likeItmsNm, String basDt) {
        log.info("service 시작");
        // 인증키 (개인이 받아와야함)
        String key = "2IAKtSM2vo4T0sUbYZvZ5czzdbn3D8ojfWNT2Ji5jtsD1%2B5%2FZoVVBFmfzzYfChNMSYbN9WkMdKfGeepsiOar8Q%3D%3D";

        // 파싱한 데이터를 저장할 변수
        String result = "";

        JSONArray item = null;

        try {
            likeItmsNm = URLEncoder.encode(likeItmsNm, "UTF-8");

            URL url = new URL("http://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey="
                    + key + "&numOfRows=50&pageNo=1&resultType=json&likeItmsNm=" + likeItmsNm + "&basDt=" + basDt);

            BufferedReader bf;

            bf = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));

            result = bf.readLine();

            JSONParser jsonParser = new JSONParser();
            JSONObject jsonObject = (JSONObject) jsonParser.parse(result);

            JSONObject response = (JSONObject) jsonObject.get("response");
            JSONObject body = (JSONObject) response.get("body");
            JSONObject items = (JSONObject) body.get("items");

            item = (JSONArray) items.get("item");

        } catch (Exception e) {
            e.printStackTrace();
        }
        return item;
    }
}