const op = require("./operacion")

// load the things we need
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 8080);
// set the view engine to ejs
//app.set('view engine', 'ejs');
//app.set('views',__dirname + '/views');

// use res.render to load up an ejs view file


app.get('/', (req, res)=> {
    const modulo = op.modulo(4,2)
    res.send('El resultado de la operacion es '+ modulo.toString())
}); 


app.listen(app.get('port'));
console.log('server on port', app.get('port'));

