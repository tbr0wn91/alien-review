const express = require('express');
const massive = require('massive');
require('dotenv').config();
const { getAllAliens, updateAlien } = require('./controller/alienController');

const app = express();

const {CONNECTION_STRING, SERVER_PORT} = process.env;

massive(CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log(`the coolest db around`)
})

app.use(express.json());

app.get('/api/aliens/', getAllAliens);

app.put('/api/aliens/:id', updateAlien)

app.listen(SERVER_PORT, () => console.log(`Chillin on port ${SERVER_PORT}`))