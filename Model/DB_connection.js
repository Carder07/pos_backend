const { MongoClient } = require('mongodb');


/* The above code is creating a new MongoClient object. */
/* This is creating a new MongoClient object. */
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);



module.exports = async function(DataBaseName, collectionName) {
    await client.connect();
    console.log('connected to data base');
    let connection = client.db(DataBaseName);
    return connection.collection(collectionName)

}