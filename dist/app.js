'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Set ejs as template engine
app.set('view engine', 'ejs');

// Set public directory path for serving static files
app.use(_express2.default.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(process.env.PORT || 8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server started');
  console.log('Serving static assets from: ' + __dirname + '/public');
});