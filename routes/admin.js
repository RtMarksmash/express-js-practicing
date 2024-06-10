const express = require('express');
const router = express.Router();
const controller = require('../controller/admin');


router.get('/add-products', controller.getAddProducts);


router.post('/add-products', controller.postAddProducts);

router.get('/products', controller.adminProducts);



module.exports = router;