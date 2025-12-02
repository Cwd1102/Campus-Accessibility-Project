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
const reportSurvey = require("./routes/survey");
app.use("/report", reportRoutes);
app.use("/survey", reportSurvey);

app.get("/route", async (req, res) =>{
  const { srcId, dstId } = req.query;
  console.log(`[ROUTE] ${new Date().toISOString()} src=${srcId} dst=${dstId}`);
  if (!srcId || !dstId) {
    return res.status(400).json({ error: "srcId and dstId are required" });
  }


  const session = driver.session();
  try {

    console.log("Checking Graph...")
    const check = await session.run(`
      CALL gds.graph.exists('campusGraph') YIELD exists
      RETURN exists
    `);
    const exists = check.records[0].get('exists');

    if (!exists) {
      console.log('[GDS] Rebuilding campusGraph...');
      await session.run(`
        CALL gds.graph.project(
          'campusGraph',
          'Intersection',
          {
            SEGMENT: {
              type: 'SEGMENT',
              orientation: 'UNDIRECTED',
              properties: ['cost']
            }
          }
        );
      `);
      console.log('[GDS] campusGraph created');
    } else {
      console.log('[GDS] Backend campusGraph already exists, skipping...');
    }

        await session.run(
  "CALL gds.graph.drop('campusGraph', false) YIELD graphName"
);

    await session.run(`
      CALL gds.graph.project.cypher(
        'campusGraph',
        'MATCH (i:Intersection) 
        WHERE coalesce(i.isObstructed, false) = false 
        RETURN id(i) AS id',
        'MATCH (a:Intersection)-[r:SEGMENT]-(b:Intersection) 
        WHERE coalesce(a.isObstructed, false) = false 
          AND coalesce(b.isObstructed, false) = false 
          AND coalesce(r.isObstructed, false) = false 
        RETURN id(a) AS source, id(b) AS target, r.cost AS cost'
      )
    `);

    const query = `
    MATCH (source:Intersection {id: $srcId}), (target:Intersection {id:$dstId})

    CALL gds.shortestPath.dijkstra.stream('campusGraph', {
      sourceNode: (source),
      targetNode: (target),
      relationshipWeightProperty: 'cost'
    })
    YIELD nodeIds, totalCost

    WITH [nodeId IN nodeIds | gds.util.asNode(nodeId).id] AS intersections, totalCost
    UNWIND range(0, size(intersections)-2) AS i
    WITH intersections, intersections[i] AS from, intersections[i+1] AS to, totalCost
    MATCH (a:Intersection {id:from})-[r:SEGMENT]-(b:Intersection {id:to})
    RETURN
      totalCost,
      collect(r.id) AS segments,
      collect({from: from, to: to, segment: r.id, cost: r.cost}) AS details,
      intersections;
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
      route: rec.get("segments"),  // ordered list of intersections
      legs: rec.get("details"),         // segment-by-segment info
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