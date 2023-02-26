const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://balajee:balajee@cluster0.cjqwipx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();
const db = client.db("s1");
const col = db.collection("c207");

async function run() {
  try {
    const result = await col.findOne({email:'balajee'});
    console.log(result);
  } finally {}
}
run().catch(console.dir);