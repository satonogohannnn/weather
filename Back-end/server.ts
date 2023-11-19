import express from 'express';
import getRecord from "./method/getRecotds";

const app: express.Express = express();

const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "127.0.0.1",
  database: "myweather",
  password: "bello2023",
  port: 5432,
});

client.connect();
client.query("SELECT * from weather_list", (err: any, res: any) => {
  console.log(err, res);
  client.end();
});

app.use(express.static("public.ts"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/getRecord", getRecord);

const port = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('server successful');
});

app.listen(port, () => {
    console.log(`port ${port} でサーバ起動中`);
});

export default app;