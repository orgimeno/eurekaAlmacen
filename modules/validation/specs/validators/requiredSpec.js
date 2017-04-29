const should = require("should")
const Required = require("../../dist/validators/required")

describe("Required validator", () => {
    it("should ensure value is 'something'", () => {
        new Required().validate().should.not.ok()
        new Required().validate(undefined).should.not.ok()
        new Required().validate({}.inexistentProperty).should.not.ok()
        new Required().validate(null).should.not.ok()
        new Required().validate("").should.not.ok()
        new Required().validate("   ").should.not.ok()

        new Required().validate("foo").should.ok()
        new Required().validate(2).should.ok()
        new Required().validate({}).should.ok()
        new Required().validate([]).should.ok()
        new Required().validate(() => {}).should.ok()
    })
})