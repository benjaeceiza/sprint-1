
const cart = require('./cart');

const carritoConTotales = cart.map(item => {
    return {
        ...item,
        totalItem: item.precio * item.cantidad
    };
});


const totalGeneral = carritoConTotales.reduce((acumulador, item) => acumulador + item.totalItem, 0);

module.exports = { totalGeneral };