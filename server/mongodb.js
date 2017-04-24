
const configuration = {
    host: "localhost",
    port: 27017,
    database: "eureka"
}
const url = `mongodb://${configuration.host}:${configuration.port}/${configuration.database}`

const MongoClient = require("mongodb").MongoClient

const getInstance = (reject, func) => {
    MongoClient.connect(url, function(err, db) {
        try{
            if(typeof reject !== "function" && typeof func !== "function"){
                throw "Second and third parameters of from() must be functions"
            }
        } catch(ex) {
            reject(ex)
            return
        }

        if(err){
            reject(err)
            return
        }
        
        func(db)
    })
}

module.exports = {getInstance}