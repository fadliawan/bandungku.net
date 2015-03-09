var SERVER_PORT = process.env.BANDUNGKU_PORT || 3000;

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello from Bandungku.net!');
});

app.listen(SERVER_PORT, function() {
  console.log('Running bandungku.net on port', SERVER_PORT);

  var count = 0;
  setInterval(function() {
    console.log(count++, 'Yo!');
  }, 1000);
});
