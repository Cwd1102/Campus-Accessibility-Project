require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
var neo4j = require('neo4j-driver');



app.use(cors());
app.use(express.json());
app.listen(8080, () => {
  console.log("api listening on 8080")
});


const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);

// Route imports
const reportRoutes = require("./routes/reports");
app.use("/report", reportRoutes);

app.get("/route", async (req, res) =>{
  const { srcId, dstId } = req.query;
  console.log(`[ROUTE] ${new Date().toISOString()} src=${srcId} dst=${dstId}`);
  if (!srcId || !dstId) {
    return res.status(400).json({ error: "srcId and dstId are required" });
  }


  const session = driver.session();
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


    const result = await session.run(query, { srcId, dstId }); //Call to NEO4j backend

    //Error out if endpoints dont exist
    if (result.records.length === 0) {
      return res.status(404).json({
        error: "No path found between these nodes"
      });
    }

    const rec = result.records[0];
    return res.json({
      route: rec.get("route"),
      legs: rec.get("legs"),
      totalCost: rec.get("totalCost")
    });

`
    const rows = result.records.map(r => ({
      route: r.get('route'),         // array of node ids
      legs: r.get('legs'),           // array of { from, to, cost }
      totalCost: r.get('totalCost')  // number
    }));

    console.log(rows[0].route);
    console.log(rows[0].legs);
    console.log(rows[0].totalCost);
`

  }catch (err) {
    console.error('Query failed:', err);
    return res.status(500).json({ error: "Internal server error" });
  } finally {
    await session.close();
  } 


});
