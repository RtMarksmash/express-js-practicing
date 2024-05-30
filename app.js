const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));


app.use(adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>')

});


app.listen(config.port, () => {
    console.log(`server on port ${config.port}`)
});