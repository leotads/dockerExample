'use strict'

const app = require('express')();
const HOST = process.env.APP_HOST || '0.0.0.0';
const PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res)=> {
  res.send('Hello World')
});

app.listen(PORT, HOST)

