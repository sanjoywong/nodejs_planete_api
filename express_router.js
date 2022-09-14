const express = require('express');
const app = express();
var router = app.router;

router.get('/', function (req, res) {
  res.send('hello world, welcome to the express router')
});

app.listen(8001);