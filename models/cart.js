const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'product.json');

class Cart {
    constructor() {

    }


    static addProduct(id, productPrice) {
        fs.readFile(p, (error, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!error) {
                cart = JSON.parse(fileContent);
            };

            const existingProduct = cart.products.findIndex(product => product.id === id);




        })


    }
}