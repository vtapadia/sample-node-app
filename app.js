// var msg = 'Hello World';
// console.log(msg);

var express = require('express');
//Configuration
var server = {
  port: 3000
};

//API's
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
  }
);

app.get('/api/name', function (req, res) {
  //TODO Get first name and last name, combine and respond.
  res.send('Varesh Tapadia');
});

app.get('/api/name/first', function (req, res) {
  res.send('Varesh');
});
app.get('/api/name/last', function (req, res) {
  res.send('Tapadia');
});

//Server start
app.listen(server.port, function () {
  console.log('Example app listening on port %d!', server.port);
});
