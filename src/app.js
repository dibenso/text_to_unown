import express from 'express';

let app = express();

// Set ejs as template engine
app.set('view engine', 'ejs');

// Set public directory path for serving static files
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

let server = app.listen(8080, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Server started');
  console.log('Serving static assets from: ' + __dirname + '/public');
});
