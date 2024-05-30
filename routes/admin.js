const express = require('express');
const path = require('path');
const router = express.Router();
const rootPath = require('../util/path');

router.get('/add-products', (req, res) => {
    res.sendFile(path.join(rootPath, 'views', 'add-product.html'))
});

router.post('/add-products', (req, res) => {
    console.log(req.body)
    res.redirect('/');
});

module.exports = router;