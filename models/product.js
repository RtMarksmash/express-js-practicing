const path = require('path');
const fs = require('fs');

const products = [];

class Product {
    constructor(t) {
        this.title = t
    }


    save() {
        const p = path.join(path.dirname(process.mainModule.filename),
            'data',
            'product.json')

        fs.readFile(p, (err, filecontent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(filecontent);
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err)
            })
        })
    }



    fetchAll() {
        const p = path.join(path.dirname(process.mainModule.filename),
            'data',
            'product.json')

        fs.readFile(p, (err, filecontent) => {
            if (err) {
                return []
            }
            return JSON.parse(filecontent)
        })
        return products
    }

};

module.exports = Product;