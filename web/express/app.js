var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});
app.post('/', function (req, res) {
    res.send('hello world');
});
app.put('/', function (req, res) {
    res.send('hello world');
});
app.delete('/', function (req, res) {
    res.send('hello world');
});

app.listen(3000, function () {
    console.log('Example app listen on port 3000')
});