const express = require("express");
const router = express.Router();
const { connectDB, getClient } = require("../db/mongo");


router.post("/", async (req, res) => {
  try {

    // Reuse existing Mongo client and ensure connection
    const db = await connectDB();
    const reports = db.collection("reports");
    console.log("Incoming POST /report", req.body);

    const newReport = {
      building: req.body.building,
      floor: req.body.floor,
      locationType: req.body.locationType,
      notes: req.body.notes,
      timestamp: new Date().toISOString(),
    };

    const result = await reports.insertOne(newReport);
    console.log("saving")
    res.status(201).json({ success: true, id: result.insertedId });

    } catch (err) {
    console.error("Error listing databases:", err);
    res.status(500).json({ error: "Failed to add" });
  }
});

module.exports = router;