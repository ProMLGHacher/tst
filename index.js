import './db.js'

import express, { json } from 'express'
import sql from './db.js';

var app = express();

app.use(json())


app.get('/', async function (req, res) {
    const users = await sql`select * from user`
    console.log(users);
    res.send(users);
});

app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${3000}`);
});