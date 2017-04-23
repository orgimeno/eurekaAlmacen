var express = require('express')
const app = express()
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/html/index.html'))
})

app.use('/api/v1', require("./routes/api/routes"))

app.listen(3000, function () {
  console.log('Escucha puerto 3000 again')
})