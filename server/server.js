const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const quotes_data = require('./modules/all-quotes');

app.use(express.static('server/public')); //connects servers to public files (pulls them up)
app.use(bodyParser.urlencoded({extended: true}));

app.get('/all-quotes', (req, res) => {
    res.send(quotes_data);
});

app.post('/add-quote', (req, res) =>{
    console.log(req.body);
})

app.get('/quotes', (req, res) => { // !! add a quotes module
    const randomNumber = Math.floor(Math.random() * quotes_data.length);
    res.send(quotes_data[randomNumber]);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

