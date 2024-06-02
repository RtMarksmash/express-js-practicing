const express = require('express');
const path = require('path');
const router = express.Router()
const rootPath = require('../util/path');

const products = [];

router.get('/add-products', (req, res) => {
    res.render('add-product', { title: 'products title', pageTitle: 'products', path: '/admin/add-products' })
});


router.post('/add-products', (req, res) => {
    products.push({ title: req.body.title })
    res.redirect('/');
});

module.exports = {
    products,
    router
}