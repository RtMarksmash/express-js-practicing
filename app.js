const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');

app.use(bodyParser.urlencoded({ extended: false }));


app.listen(config.port, () => {
    console.log(`server on port ${config.port}`)
})