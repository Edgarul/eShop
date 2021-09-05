var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4201

var app = express();

mongoose.connect('mongodb://localhost:27017/shop',
{useNewUrlParser: true,
useUnifiedTopology: true}, (err,res) => {
  if (err){
    throw err;
    console.log('error' + err);
  }
  else{
    console.log('Corriendo el servidor')
    app.listen(port, function(){
      console.log('Conectado en el puerto ' + port);
    })
  }
})

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

module.exports = app;
