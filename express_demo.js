var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World, welcome to node express !');
})
 
var server = app.listen(8081, function () {
 
  /* var host = server.address().address;
  var port = server.address().port;

  console.log(host);
  console.log(port); */
 
  console.log(`visiter le site par http://localhost:8081`)
 
})