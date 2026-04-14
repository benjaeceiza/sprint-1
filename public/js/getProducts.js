const products = require('./products');


const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
}


const getRandomProducts = (productsArray, count = 4) => {
    const shuffled = [...productsArray];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
};


module.exports = { getProductById, getRandomProducts };