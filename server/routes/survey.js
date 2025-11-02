const express = require("express");
const router = express.Router();
const { connectDB, getClient, ObjectId } = require("../db/mongo");

router.post("/create", async (req, res) => {

    try{
    const db = await connectDB();
    const reports = db.collection("survey");
    console.log("Incoming POST /survey", req.body);

    let { responses, comments } = req.body;

    if (!Array.isArray(responses) || responses.length !== 10) {
      return res.status(400).json({
        error: "responses must be an array of 10 integers between 1 and 5"
      });
    }

    const cleanResponses = responses.map(Number);
    if (cleanResponses.some(n => !Number.isInteger(n) || n < 1 || n > 5)) {
      return res.status(400).json({
        error: "each response must be an integer in the range 1..5"
      });
    }

    const doc = {
      kind: "survey",
      responses: cleanResponses,          
      comments: (comments ?? "").toString().slice(0, 5000),
      timestamp: new Date().toISOString()
    };

    const result = await reports.insertOne(doc);
    return res.status(201).json({ ok: true, id: result.insertedId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }

});

module.exports = router;