package com.example.model;

public class Weather {

    private int id;
    private String city;
    private double temperature;
    private String description;

    public Weather() {
    }

    public Weather(int id, String city, double temperature, String description) {
        this.id = id;
        this.city = city;
        this.temperature = temperature;
        this.description = description;
    }

    // Getters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
