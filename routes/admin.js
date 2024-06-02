const express = require('express');
const path = require('path');
const router = express.Router()
const rootPath = require('../util/path');

const products = [];

router.get('/add-products', (req, res) => {
    res.render('add-product', { title: 'products title' })
});


router.post('/add-products', (req, res) => {
    products.push({ title: req.body.title })
    res.redirect('/');
});

module.exports = {
    products,
    router
}