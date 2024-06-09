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


}


class Product {
    constructor(t) {
        this.title = t
    };


    save() {
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

};

module.exports = Product;