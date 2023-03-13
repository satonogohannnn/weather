import { Express } from "express";

const express = require("express");
const app = require("./server");

app.get('/api', (req: express.Request, res: express.Response) => {
    res.json([
        {
            weatherName: "晴れ",
            ditail: "ダーツをした",
        },
        {
            weatherName: "雨",
            ditail: "勉強が捗らない",
        },
        {
            weatherName: "曇り",
            ditail: "やけどしたけど、ご飯は美味しかった",
        },
    ]);
});