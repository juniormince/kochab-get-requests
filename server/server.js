const express = require('express');
const app = express();
const PORT = 5000;

const quotes_data = require('./modules/all-quotes');

app.use(express.static('server/public')); //connects servers to public files (pulls them up)

// app.get('/', (req, res) => {
//     console.log('yep it worked!');
//     res.send('happy wednesday');
// });

app.get('/all-quotes', (req, res) => {
    res.send(quotes_data);
});

app.get('/quotes', (req, res) => { // !! add a quotes module
    const randomNumber = Math.floor(Math.random() * quotes_data.length);
    res.send(quotes_data[randomNumber]);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

//TO DOOOOOO
// [x] make button -INDEX.HTML
// [x] make button click - CLIENT.JS
// [x] button returns random quote in console log -CLIENT.JS
// [] button returns a random quote IN THE DOM -CLIENT.JS

