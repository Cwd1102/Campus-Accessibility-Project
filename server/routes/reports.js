const express = require("express");
const router = express.Router();
const { connectDB, getClient } = require("../db/mongo");


router.get("/", async (req, res) => {
  try {

    // Reuse existing Mongo client and ensure connection
    const db = await connectDB();
    const reports = db.collection("reports");


    const allReports = await reports.find().toArray();

    console.log(`[MONGO] Found ${allReports.length} reports`);
    res.json({ reports: allReports });   

    } catch (err) {
    console.error("Error listing databases:", err);
    res.status(500).json({ error: "Failed to list databases" });
  }
});

module.exports = router;