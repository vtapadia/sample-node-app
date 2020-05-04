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

const http = require('http');

function get(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, (res) => {
      var data ='';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        console.log("Got data %s", data);
        resolve(data);
      });
      res.on('error', (err) => {
        console.error(err);
        reject("failed to execute URL");
      });
    });
  });
}

app.get('/api/name', function (req, res) {
  var fName = get('http://localhost:3000/api/name/first');
  var lName = get('http://localhost:3000/api/name/last');
  Promise.all([fName, lName]).then(function(values) {
    res.send(values[0] + " " + values[1] + "!!!");
  })
  // res.send(fName + " " + lName + "!!!");
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
