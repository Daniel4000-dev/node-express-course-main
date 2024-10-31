const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send("Welcome to our home page")
})

// Get all products
app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            label: 'products 1'
        },
        {
            id: 2,
            label: 'products 2'
        },
        {
            id: 3,
            label: 'products 3'
        },
    ]

    res.json(products);
});

// Get a single product
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id)
    const products = [
        {
            id: 1,
            label: 'products 1'
        },
        {
            id: 2,
            label: 'products 2'
        },
        {
            id: 3,
            label: 'products 3'
        },
    ]

    const getSingleProduct = products.find(product => product.id === productId);

    if(getSingleProduct) {
        res.json(getSingleProduct)
    } else {
        res.status(404).send("product is not found!")
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})