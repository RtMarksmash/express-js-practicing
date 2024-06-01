const express = require('express');
const path = require('path')
const router = express.Router();
const rootPath = require('../util/path');
const adminData = require('./admin')


router.get('/', (req, res) => {
    console.log('shop.js', adminData.products)
    res.sendFile(path.join(rootPath, 'views', 'shop.html'))
})



module.exports = router;