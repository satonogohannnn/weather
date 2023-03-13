import express from 'express';
import pg from 'pg';

const app: express.Express = express();
const port = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('server successful');
});

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

app.listen(port, () => {
    console.log(`port ${port} でサーバ起動中`);
});