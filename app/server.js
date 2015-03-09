var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello from Bandungku.net!');
});

app.listen(3000, function() {
  console.log('Running bandungku.net on port 3000');

  var count = 0;
  setInterval(function() {
    console.log(count++, 'Yo!');
  }, 1000);
});
