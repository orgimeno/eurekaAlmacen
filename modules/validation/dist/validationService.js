class ValidationService{
    static validate(value, validators){
        return validators
            .filter(v => !v.validate(value))
            .map(v => v.errorMessage)
    }

    static validateEntity(entity, schema){
        let output = {
            __success: true
        }

        for (let key in schema) {
            if (schema.hasOwnProperty(key)) {
                const errors = this.validate(entity[key], schema[key])

                if(errors.length){
                    output[key] = errors
                    output.__success = false;
                }
            }
        }

        return output
    }
}

module.exports = ValidationService