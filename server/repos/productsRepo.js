const collectionName = "products"

const {getInstance, ObjectID} = require("../mongodb")

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

    delete: (id) => {
        return new Promise((resolve, reject) => {
            getInstance(reject, (db) => {
                db.collection(collectionName)
                    .deleteOne({_id: new ObjectID(id)}, (err, result) => {
                        if(err){
                            reject(err)
                            return
                        }

                        resolve({deleted: result.deletedCount > 0})
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
                    .findOne({_id: new ObjectID(id)}, (err, documents) => {
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

    update: (id, data) => {
        return new Promise((resolve, reject) => {
            getInstance(reject, (db) => {
                db.collection(collectionName)
                    .updateOne({_id: new ObjectID(id)}, {$set: data}, (err, result) => {
                        if(err){
                            reject(err)
                            return
                        }

                        resolve({updated: result.modifiedCount > 0})
                    })
            })
        })
    }
}

module.exports = productsRepo