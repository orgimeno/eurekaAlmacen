const should = require("should")
const ValidationService = require("../dist/validationService")

class DummyValidator {
    constructor(errorMessage, response){
        this.errorMessage = errorMessage
        this.response = response
    }

    validate() {
        return this.response
    }
}

describe("Validation service", () => {
    it("has a validate method", () => {
        ValidationService
            .should.have.property('validate')
            .which.is.a.Function()
    })
})

describe("It's validate method", () => {
    it("gets a value and some validators and returns an array", () => {
        ValidationService.validate("foo", [new DummyValidator("foo", false)])
            .should.be.an.Array()
    })

    it("returns the messages if the validation of the validators fail", () => {
        const errors = ValidationService.validate("whatever", [
            new DummyValidator("foo", false),
            new DummyValidator("baz", true),
            new DummyValidator("bar", false)
        ])
        
        errors.should.have.size(2)
        should("foo").be.oneOf(errors)
        should("bar").be.oneOf(errors)
    })
})