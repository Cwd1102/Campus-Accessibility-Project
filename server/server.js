require('dotenv').config()
const express = require("express");
const app = express();
var neo4j = require('neo4j-driver');


(async () => {
  const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
  );

    const session = driver.session()

  try {

    const result = await session.run(
      'MATCH (p:Place) RETURN p.id AS id, p.name AS name LIMIT 5'
    );

    result.records.forEach(r => {
      console.log(r.get('id'), r.get('name'));
    });

  } catch (err) {
    console.error('Query failed:', err);
  } finally {
    await session.close();
    await driver.close();
  }

})();

});

app.listen(8080, () => {
  console.log("api listening on 8080")
});