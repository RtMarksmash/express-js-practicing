const Product = require("../models/product");


exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('shop/products-list', {
            prods: products,
            pageTitle: 'shop',
            path: '/products',
            hasProduct: products.length > 0,
            formsCSS: true,
            productCSS: true,
            activeShop: true,
            activeAddProduct: true
        })
    });
};


exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'index',
            path: '/',
            activeShop: true,
            activeAddProduct: true
        })
    });

};


exports.getCart = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/cart', {
            prods: products,
            pageTitle: 'your cart',
            path: '/cart',
            activeShop: true,
            activeAddProduct: true
        })
    });
};