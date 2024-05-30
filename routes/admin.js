const express = require('express');

const router = express.Router();

router.get('/add-products', (req, res) => {
    res.send('<form action="/products" method="POST"><input type="text" name="title" ></input><button type="submit" >enviar</button></form>')

});

router.post('/products', (req, res) => {
    console.log(req.body)
    res.redirect('/');
});



module.exports = router;