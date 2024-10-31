const express = require('express');
const app = express();

// Middleware
app.use(express.json())

let books = [
    {
        id: '1',
        title: 'book 1'
    },
    {
        id: '2',
        title: 'book 2'
    }
];

// Intro route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to our bookstore api",
    });
});

// Get all books
app.get('/get', (req, res) => {
    res.json(books);
});

//Get a single book
app.get('/get/:id', (req, res) => {
    const book = books.find(item => item.id === req.params.id);
    if(book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({
            message: "Book not found"
        })
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is now running on port ${port}`)
})