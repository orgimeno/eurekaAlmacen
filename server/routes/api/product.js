const product = require("express").Router()
const ValidationService = require("../../../modules/validation/dist/validationService")
const Required = require("../../../modules/validation/dist/validators/required")
const repo = require("../../repos/productsRepo")

const NonImplementedException = function(){
  this.asString = () => this.constructor.name;
}

product.get("/", function(req, res){
  repo.getAll().then(
    data => res.send(data), 
    reason => res.send(reason)
  )
})

product.get("/:id", function(req, res){
  repo.getOne(req.params.id).then(
    data => res.send(data), 
    reason => res.send(reason)
  )
})

product.post("/", function(req, res){
  const {name} = req.body

  const errors = ValidationService.validate(name, [
    new Required("Product name is required")
  ])

  if(errors.length){
    res.send(errors)
    return
  }

  repo.create(req.body).then(
    data => res.send(data), 
    reason => res.send(reason)
  )
})

product.put("/:id", function(req, res){
  repo.update(req.params.id, req.body).then(
    data => res.send(data),
    reason => res.send(reason)
  )
})

product.delete("/:id", function(req, res){
  repo.delete(req.params.id).then(
    data => res.send(data),
    reason => res.send(reason)
  )
})

module.exports = product