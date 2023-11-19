import { Request, Response } from "express";

function getRecord(app: any) {
    app.get("/find", (req: Request, res: Response) => {
        console.log("find");
        // connection.query("SELECT * FROM `Posts`", (err: string, results: []) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        //     res.send(results);
        // })
    });
}

export default getRecord;