class Required {
    constructor(errorMessage){
        this.errorMessage = errorMessage
    }

    validate(value){
        return typeof value !== "undefined" 
            && value !== null 
            && (typeof value !== "string" || value.trim().length)
    }
}

module.exports = Required