var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile('/home/linuxuser/Projects/Guillermo/client/html/index.html')
})

app.listen(3000, function () {
  console.log('Escucha puerto 3000 again')
})
// good job!!
