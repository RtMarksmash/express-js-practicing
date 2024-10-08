const { where } = require('sequelize');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    req.user.createProduct({
            title: title,
            imageUrl: imageUrl,
            price: price,
            description: description,
        })
        .then(result => {
            console.log('product created')
            res.redirect('/admin/products')
        }).catch(err => {
            console.log(err)
        })
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    req.user.getProducts({ where: { id: prodId } })
        //Product.findByPk(prodId)
        .then(products => {
            const product = products[0]
            if (!product) {
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                editing: editMode,
                product: product
            });
        })
        .catch(err => {
            console.log(err)
        });
};


exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updateTitle = req.body.title;
    const updateImageUrl = req.body.imageUrl;
    const updatePrice = req.body.price;
    const updateDescription = req.body.description;
    Product.findByPk(prodId)
        .then(product => {
            product.title = updateTitle;
            product.price = updatePrice;
            product.description = updateDescription;
            product.imageUrl = updateImageUrl;
            return product.save();
        })
        .then(result => {
            console.log('UPDATE PRODUCT');
            res.redirect('admin/products');
        })
        .catch(err => {
            console.log(err)
        })
};

exports.getProducts = (req, res, next) => {
    req.user
        .getProducts()
        .then(products => {
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products'
            });
        })
        .catch(err => {
            console.log(err)
        });
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findByPk(prodId)
        .then(product => {
            product.destroy()
        })
        .then(result => {
            res.redirect('/admin/products')
        })
        .catch(err => {
            console.log(err)
        })
};