const express = require('express');
const api = require('./api');
const app = express();
const port = 3001; 

app.use('/api/v1', api);

app.listen(port);
