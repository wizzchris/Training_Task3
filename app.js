var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var {PythonShell} = require('python-shell');

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(req, res) {
  res.render('home')
});

app.get('/calculator', function(req, res) {
  res.render('calculator')
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
