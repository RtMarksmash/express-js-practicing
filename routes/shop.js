const express = require('express');
const router = express.Router();
const controller = require('../controller/shop');

router.get('/', controller.getIndex);
router.get('/products', controller.getProducts);
router.get('/products/:productId', controller.getProduct)
router.get('/cart', controller.getCart);
router.get('/orders', controller.getOrders);
router.get('/checkout');


module.exports = router;