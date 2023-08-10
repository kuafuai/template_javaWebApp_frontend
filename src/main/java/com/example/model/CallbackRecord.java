package com.example.model;

public class CallbackRecord {

    private int id;
    private String callbackTime;
    private String callbackData;

    public CallbackRecord() {
    }

    public CallbackRecord(int id, String callbackTime, String callbackData) {
        this.id = id;
        this.callbackTime = callbackTime;
        this.callbackData = callbackData;
    }

    // Getters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCallbackTime() {
        return callbackTime;
    }

    public void setCallbackTime(String callbackTime) {
        this.callbackTime = callbackTime;
    }

    public String getCallbackData() {
        return callbackData;
    }

    public void setCallbackData(String callbackData) {
        this.callbackData = callbackData;
    }
}
