const op = require("./operacion")

var express = require('express');
var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res)=> {
    const mod = op.mod(4,2)
    res.send('El resultado de la operacion es '+ mod.toString())
}); 


app.listen(app.get('port'));
console.log('server on port', app.get('port'));

