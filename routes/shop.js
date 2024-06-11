const express = require('express');
const router = express.Router();
const controller = require('../controller/shop');

router.get('/', controller.getIndex);
router.get('/products', controller.getProducts);
router.get('/cart', controller.getCart);
router.get('/orders', controller.getOrders);


module.exports = router;