const path = require('path');
const fs = require('fs');

const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'product.json')

const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, filecontent) => {
        if (err) {
            return cb([]);
        } else {
            return cb(JSON.parse(filecontent))
        }

    })
};


class Product {
    constructor(title, imageUrl, price, description) {

        this.title = title,

            this.imageUrl = imageUrl,

            this.price = price,

            this.description = description
    };


    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), error => {
                console.log(error)
            })
        })
    };

    static fetchAll(cb) {
        getProductsFromFile(cb)
    };

    static productFindById(id, cb) {
        getProductsFromFile(product => {
            const products = product.find(p => p.id === id)
            cb(products)
        })
    };

};


module.exports = Product;