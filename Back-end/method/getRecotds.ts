import express, { Router, Request, Response } from "express";
import { get } from "http";

const mysql = require("mysql2");

const router: Router = express.Router();
type USER_TYPE = {
    id: null,
    email: string,
    password: string,
    name: string
};

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "myWeather",
});

connection.connect((err: string) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("sql success");
});

function getRecord (app: any) {
    app.get("/find", (req: Request, res: Response) => {
        console.log("find");
        connection.query("SELECT * FROM `Posts`", (err: string, results: []) => {
            if (err) {
                console.log(err);
                return;
            }
            res.send(results);
        })
    })
}


export default getRecord;