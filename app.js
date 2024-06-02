const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootPath = require('./util/path');


app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', adminRoutes.router);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render('404')
});


app.listen(config.port, () => {
    console.log(`server on port ${config.port}`)
});