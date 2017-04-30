const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/angular', express.static(__dirname + '/../node_modules/angular'))
app.use('/angular-route', express.static(__dirname + '/../node_modules/angular-route'))
app.use('/partials', express.static(__dirname + '/../client/built/html/partials'))
app.use('/app', express.static(__dirname + '/../client/built/app'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/built/html/index.html'))
})

app.use('/api/v1', require("./routes/api/routes"))

app.listen(3000, function () {
  console.log('Linten port 3000 again')
})