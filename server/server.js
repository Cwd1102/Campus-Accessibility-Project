require('dotenv').config()
const express = require("express");
const app = express();
var neo4j = require('neo4j-driver');

app.listen(8080, () => {
  console.log("api listening on 8080")
});


(async () => {
  const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
  );

  const session = driver.session()

  try {

    const query = `
    WITH $srcId AS srcId, $dstId AS dstId
    MATCH (src:Node {id: srcId})
    MATCH (dst:Node {id: dstId})
    CALL gds.shortestPath.dijkstra.stream(
      'campusGraph',
      {
        sourceNode: (src),
        targetNode: (dst),
        relationshipWeightProperty: 'cost'
      }
    )
    YIELD path, totalCost
    WITH path, totalCost, nodes(path) AS ns, relationships(path) AS rs
    RETURN
      [n IN ns | n.id] AS route,
      [i IN range(0, size(rs) - 1) |
        { from: ns[i].id, to: ns[i+1].id, cost: rs[i].cost }
      ] AS legs,
      totalCost
  `;

    const result = await session.run(
      query, {
      srcId: 'PAHB_1_E',
      dstId: 'FA_2_C'
    }
    );

    const rows = result.records.map(r => ({
      route: r.get('route'),         // array of node ids
      legs: r.get('legs'),           // array of { from, to, cost }
      totalCost: r.get('totalCost')  // number
    }));

    console.log(rows[0].route);
    console.log(rows[0].legs);
    console.log(rows[0].totalCost);

  } catch (err) {
    console.error('Query failed:', err);
  } finally {
    await session.close();
    await driver.close();
  }

})();

