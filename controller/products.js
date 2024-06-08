const Product = require("../models/product");

exports.getAddProducts = (req, res) => {
    res.render('add-product', {
        title: 'products title',
        pageTitle: 'products',
        path: '/admin/add-products',
        productCSS: true,
        formsCSS: true,
        activeAddProduct: true
    })
};


exports.postAddProducts = (req, res) => {
    const product = new Product(req.body.title);
    product.save()
    res.redirect('/');
};

exports.getProducts = (req, res) => {
    const product = new Product();
    const products = product.fetchAll();
    res.render('shop', {
        prods: products,
        pageTitle: 'shop',
        path: '/',
        hasProduct: products.length > 0,
        formsCSS: true,
        productCSS: true,
        activeShop: true,
        activeAddProduct: true
    })
};