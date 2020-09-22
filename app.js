var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var {PythonShell} = require('python-shell');

app.set('view engine', 'pug');
app.set('views','./views');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.render('home')
});

app.get('/calculator', function(req, res) {
  res.render('calculator')
});

app.post("/calculator", function (req, res) => {
  console.log(req.body);
  let options = {
      mode: 'json',
      pythonPath: '/usr/bin/python3',
      pythonOptions: ['-u'], // get print results in real-time
      scriptPath: '/Users/admin/Documents/Training_Task3/',
      args: [req.body]
  };
  
  PythonShell.run('main.py', options, function (err, results) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: %j', results);
  });
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
