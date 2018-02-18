// list on port 3000
const portNum = 3000;

const express = require('express');
const app = express();

var R = require("r-script");


// enable static final serving from public folder
const path = require('path');
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false }));

// load routes from routes folder
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/quality', function(req, res) {
    res.sendFile(path.join(__dirname + '/quality.html'));
});

// app.set('view engine', 'hbs');

// respond to / (our single page)
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(portNum);
console.log('listening on', portNum);