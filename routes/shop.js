const express = require('express');
const path = require('path')
const router = express.Router();
const rootPath = require('../util/path');

router.get('/', (req, res) => {
    res.sendFile(path.join(rootPath, 'views', 'shop.html'))
})



module.exports = router;