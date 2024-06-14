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
    const Title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(Title, imageUrl, price, description);
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