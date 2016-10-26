var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('../public'));
app.use(bodyParser());

app.get('/turtle', function(req, res) {
  console.log(req.body, 'req body');
  res.status(200);
});

app.listen(3000, function() {
  console.log('listening on port 3000 ... :3');
});