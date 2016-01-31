var fs = require('fs');
var browserify = require('browserify');
var babel = require("babel-core");

// compile src/public/js/app.js (client)
browserify('../src/public/js/app.js').transform("babelify", {presets: ["es2015"]}).bundle().pipe(fs.createWriteStream('../dist/public/js/app.js'));

// compile src/app.js (server)
babel.transformFile('../src/app.js', {presets: ['es2015']}, function(err, result) {
  if(err) {
    console.log(err);
    return;
  } else {
    fs.writeFile("../dist/app.js", result.code, function(write_err) {
      if(write_err) {
        console.log(write_err);
        return;
      } else {
        console.log("The file has been compiled.");
      }
    });
  }
});
