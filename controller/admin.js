const Product = require("../models/product");


exports.getAddProducts = (req, res) => {
    res.render('admin/add-product', {
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


exports.adminProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'admin products',
            path: '/admin/products',
            activeShop: true,
            activeAddProduct: true
        })
    });



}