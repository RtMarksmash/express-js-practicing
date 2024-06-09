const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const controllerError = require('./controller/error')
const path = require('path');


//(app.engine('hbs', handlebars({ layoutsDir: '/views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use(controllerError.error404);


app.listen(config.port, () => {
    console.log(`server on port ${config.port}`)
});