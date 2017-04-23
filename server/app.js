var express = require('express')
var app = express()
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/html/index.html'))
})

app.listen(3000, function () {
  console.log('Escucha puerto 3000 again')
})