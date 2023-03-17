const express = require('express');
const app = express();
const port = 80;

const cors = require('cors');

const { getFile } = require('./utils/methods');

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.sendFile(
        getFile('index.html')
    );
});

app.get('/about', (req, res) => {
    res.sendFile(
        getFile('about.html')
    );
});

app.get('/technologies', (req, res) => {
    res.sendFile(
        getFile('technologies.html')
    );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));