const product = require("express").Router()

const NonImplementedException = function(){
  this.asString = () => this.constructor.name;
}

product.get("/", function(){
  throw new NonImplementedException().asString()
})

product.get("/:id", function(req, res){
  throw new NonImplementedException().asString()
})

product.post("/", function(req, res){
  throw new NonImplementedException().asString()
})

product.put("/:id", function(req, res){
  throw new NonImplementedException().asString()
})

product.delete("/:id", function(req, res){
  throw new NonImplementedException().asString()
})

module.exports = product