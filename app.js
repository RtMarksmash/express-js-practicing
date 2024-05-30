const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));


app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404error.html'))

});


app.listen(config.port, () => {
    console.log(`server on port ${config.port}`)
});