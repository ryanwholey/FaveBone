var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/../client'));

app.listen(8000);
console.log('server now listening on 8000');