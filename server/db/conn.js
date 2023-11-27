const { MongoClient } = require('mongodb')
var mongoose = require('mongoose');


const DB = process.env.DATABASE


async function listDatabases(client){
    databasesList = await client.db().listCollections().toArray();

    console.log(databasesList);
    //databasesList.collections.forEach(db => console.log(` - ${db.name}`));
};

async function con(){
      mongoose.connect(DB, { useUnifiedTopology: true })
    .then(() => { console.log('Connected to MongoDB: %s \n ', DB) }) 
    .catch((err) => { console.log('MongoDB connection error: %s \n', err); })

}

con().catch(console.error)