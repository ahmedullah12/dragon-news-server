const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.Port || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('News api running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/news', (req, res) => {
    res.send(news);
})

app.listen(port, () => {
    console.log('Draggon news server running on port: ', port)
});