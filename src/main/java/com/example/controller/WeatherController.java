package com.example.controller;

import com.example.model.CallbackRecord;
import com.example.model.Weather;
import com.example.service.CallbackService;
import com.example.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class WeatherController {

    private final WeatherService weatherService;
    private final CallbackService callbackService;

    @Autowired
    public WeatherController(WeatherService weatherService, CallbackService callbackService) {
        this.weatherService = weatherService;
        this.callbackService = callbackService;
    }

    @GetMapping("/getWeather")
    public ResponseEntity<Weather> getWeather(@RequestParam("city") String city) {
        Weather weather = weatherService.getWeather(city);
        if (weather != null) {
            return ResponseEntity.ok(weather);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/sendWeather")
    public ResponseEntity<Void> sendWeather(@RequestBody Weather weather) {
        // Send weather information to WeChat bot
        // ...

        return ResponseEntity.ok().build();
    }

    @PostMapping("/saveCallbackRecord")
    public ResponseEntity<Void> saveCallbackRecord(@RequestBody CallbackRecord record) {
        callbackService.saveCallbackRecord(record);
        return ResponseEntity.ok().build();
    }
}
