const express = require("express");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));


const categorias = require('./public/js/categories');
const products = require('./public/js/products');
const cart = require('./public/js/cart');
const { getProductById, getRandomProducts } = require('./public/js/getProducts');
const {totalGeneral} = require('./public/js/totalCart');



// Rutas
//Pagina de inicio
app.get('/',
    (req, res) => res.render('pages/index', { categorias, products })
);

// Página de un producto en particular
app.get('/products/:id', (req, res) => {
    const idDeLaUrl = req.params.id;
    const productoEncontrado = getProductById(idDeLaUrl);
    const randomProducts = getRandomProducts(products, 4);
    
    if (productoEncontrado) {

        res.render('pages/product', {
            product: productoEncontrado,
            products: products,
            randomProducts,
            categorias
        });
    } else {

        res.status(404).render('pages/productoNoEncontrado', {
            products: products,
            randomProducts,
            categorias
        });
    }
});

//Página del carrito de compras
app.get('/cart',
    (req, res) => res.render('pages/cart', { cart, totalGeneral })
);

//Página de pago
app.get('/checkout',
    (req, res) => res.render('pages/checkout')
);

//Página de registro para new users (register.ejs)
app.get('/register',
    (req, res) => res.render('pages/register')
);

//Página de inicio de sesión (login.ejs)
app.get('/login',
    (req, res) => res.render('pages/login')
);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});