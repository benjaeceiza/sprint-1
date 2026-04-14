const products = require('./products');


const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
}

module.exports = { getProductById };