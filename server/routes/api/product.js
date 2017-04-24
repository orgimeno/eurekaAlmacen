const product = require("express").Router()
const repo = require("../../repos/productsRepo")

const NonImplementedException = function(){
  this.asString = () => this.constructor.name;
}

product.get("/", function(req, res){
  repo.getAll().then(
    data => res.send(data), 
    reason => res.status(500).send(reason)
  )
})

product.get("/:id", function(req, res){
  repo.getOne(req.params.id).then(
    data => res.send(data), 
    reason => res.status(500).send(reason)
  )
})

product.post("/", function(req, res){
  let {name, price, color, stock} = req.body // todo validate (name required, default stock is 0, etc.)

  repo.create({name, price, color, stock}).then(
    data => res.send(data), 
    reason => res.status(500).send(reason)
  )
})

product.put("/:id", function(req, res){
  throw new NonImplementedException().asString()
})

product.delete("/:id", function(req, res){
  throw new NonImplementedException().asString()
})

module.exports = product