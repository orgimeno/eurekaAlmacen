const collectionName = "products"

const getInstance = require("../mongodb").getInstance

const productsRepo = {
    create: (obj) => {
        return new Promise((reject, resolve) => {
            getInstance(reject, (db) => {
                db.collection(collectionName)
                    .insertOne(obj, (err, result) => {
                        if(err){
                            reject(err)
                            return
                        }
                        
                        resolve({inserted: result.insertedCount > 0})
                    })      
                })
            })
    },
    
    getAll: () => {
        return new Promise((resolve, reject) => {
            getInstance(reject, (db) => {
                db.collection(collectionName)
                    .find({})
                    .toArray((err, documents) =>{
                        if(err){
                            reject(err)
                            return
                        }

                        resolve(documents)
                    })
                
                db.close()
            })
        })
    },

    getOne: (id) => {
        return new Promise((resolve, reject) => {
            getInstance(reject, (db) => {
                db.collection(collectionName)
                    .findOne({_id: id}, (err, documents) => {
                        if(err){
                            reject(err)
                            return
                        }

                        resolve(documents)
                    })

                db.close()
            })
        })
    }
}

module.exports = productsRepo