const express = require('express');
const router = express.Router();
const controller = require('../controller/products');


router.get('/add-products', controller.getAddProducts);


router.post('/add-products', controller.postAddProducts);

module.exports = router;