const { MongoClient } = require('mongodb')


const DB = process.env.DATABASE


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function con(){
    const client=new MongoClient(DB);
    try{
    await client.connect();
    console.log("Connected to DB");
    //await listDatabases(client);
    } catch(e){
        console.error(e);
    } finally {
        await client.close();
      }
}

con().catch(console.error)