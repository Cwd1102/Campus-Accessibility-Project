// db/mongo.js
const { MongoClient , ObjectId} = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("campusReports");
  }
  return db;
}

function getClient() {
  return client;
}

module.exports = { connectDB, getClient, ObjectId };