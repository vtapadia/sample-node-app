// var msg = 'Hello World';
// console.log(msg);

var express = require('express');
var server = {
    port: 3000
};
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(server.port, function () {
  console.log('Example app listening on port %d!', server.port);
});