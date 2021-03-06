const express = require('express');
const api = require('./api');
const app = express();
const port = 3001;

const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
});
app.use('/api/v1', api);

app.listen(port);
