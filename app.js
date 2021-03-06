const express  = require ('express');
const path = require ('path');
const app = express ();

app.use(express.static(path.join(__dirname,'public')));
app.listen(3030, () => console.log('servidor corriendo'));

app.get ('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.get ('/amaliaRibeiro', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/amaliaRibeiro.html'));
});

app.get ('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/babbage.html'));
});

app.get ('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/berners-lee.html'));
});

app.get ('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/clarke.html'));
});

app.get ('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/hamilton.html'));
});

app.get ('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/hopper.html'));
});

app.get ('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/lovelace.html'));
});

app.get ('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/turing.html'));
});