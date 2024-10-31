const express = require('express');

const app = express();

// Application level settings
app.set('view engine', 'ejs');

// Routing
app.get('/', (req, res) => {
    res.send('home page')
})

app.post('/api/data', (req, res) => {
    res.json({
        message: 'Data recieved',
        data: req.body
    })
})

app.use((error, req, ers, next) => {
    console.log(err.stack)
    res.status(500).send('seomthing went wrong')
})