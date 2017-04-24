const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/html/index.html'))
})

app.use('/api/v1', require("./routes/api/routes"))

app.listen(3000, function () {
  console.log('Escucha puerto 3000 again')
})