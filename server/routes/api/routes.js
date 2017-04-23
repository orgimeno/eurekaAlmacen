const api = require("express").Router()

api.use('/product', require("./product"))

module.exports = api