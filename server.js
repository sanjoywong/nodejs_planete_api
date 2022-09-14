const express = require('express');
const app = express()
const indexRouter = require('./routes/index');
const planetesRouter = require('./routes/pl');

app.use('/', indexRouter);
app.use('/planetes', planetesRouter);

app.listen(7500);