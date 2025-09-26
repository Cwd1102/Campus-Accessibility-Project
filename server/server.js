require('dotenv').config()
const express = require("express");
const app = express();
var neo4j = require('neo4j-driver');

(async () => {
  // URI examples: 'neo4j://localhost', 'neo4j+s://xxx.databases.neo4j.io'
  const URI = process.env.NEO4J_URI
  const USER = process.env.NEO4J_USERNAME
  const PASSWORD = process.env.NEO4J_PASSWORD
  let driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
  const serverInfo = await driver.getServerInfo()
  console.log('Connection established')
  console.log(serverInfo)

  // Use the driver to run queries

  await driver.close()
})();


app.get("/api", (req,res) => {

    res.json({ fruits: ["apple", "banana", "john"]})
});

app.listen(8080,() => {
    console.log("api listening on 8080")
});