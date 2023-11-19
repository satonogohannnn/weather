import express from 'express';
import setGetRecordRoute from "./public";

const app: express.Express = express();

const { Client } = require("pg");
const client = new Client({
  // my postgre account
});

client.connect();

// app.use('/static', express.static("public.ts"));
setGetRecordRoute(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('server successful');
});

app.listen(port, () => {
    console.log(`port ${port} でサーバ起動中`);
});

export default app;