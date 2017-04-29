class ValidationService{
    static validate(value, validators){
        return validators
            .filter(v => !v.validate(value))
            .map(v => v.errorMessage)
    }
}

module.exports = ValidationService