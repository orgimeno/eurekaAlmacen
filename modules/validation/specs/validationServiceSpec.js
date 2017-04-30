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

    it("has a validateEntity method", () => {
        ValidationService
            .should.have.property('validateEntity')
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

describe("It's validateEntity method", () => {
    it("returns and object with the format errors found for each property of the given object", () => {
        const schema = {
            foo: [new DummyValidator("foo", false)],
            bar: [new DummyValidator("bar", true)]
        }

        const result = ValidationService.validateEntity({}, schema)
        
        result
            .should.have.property("foo")
            .and.should.not.have.property("bar")

        result.foo.should.have.size(1)
        should("foo").be.oneOf(result.foo)
    })
})