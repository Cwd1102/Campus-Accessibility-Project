require('dotenv').config()
const express = require("express");
const app = express();
var neo4j = require('neo4j-driver');


(async () => {

  const URI = process.env.NEO4J_URI
  const USER = process.env.NEO4J_USERNAME
  const PASSWORD = process.env.NEO4J_PASSWORD
  let driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
  const serverInfo = await driver.getServerInfo()
  console.log('Connection established')
  console.log(serverInfo)


  let { records, summary } = await driver.executeQuery(`
      CREATE (a:Person {name: $name})
      CREATE (b:Person {name: $friendName})
      CREATE (a)-[:KNOWS]->(b)
      `,
    { name: 'Alice', friendName: 'David' },
    { database: 'neo4j' }
  )
  console.log(
    `Created ${summary.counters.updates().nodesCreated} nodes ` +
    `in ${summary.resultAvailableAfter} ms.`
  )

  await driver.close()


});

app.get("/api", (req, res) => {

});

app.listen(8080, () => {
  console.log("api listening on 8080")
});