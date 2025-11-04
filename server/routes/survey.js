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

router.get("/loadpage", async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  try{
    const db = await connectDB();
    const reports = db.collection("survey");
    console.log("Incoming POST /loadpage");

    const docs = await reports.find({}).sort({timestamp: -1}).skip(skip).limit(limit).toArray();

    res.json(docs);
  }catch(err){
    console.error(err);
    res.status(500).json({error: err.message});

  }


});

module.exports = router;

/////////////////////////////
router.get("/stats", async (req, res) => {
  try {
    const db = await connectDB();
    const reports = db.collection("survey");

    console.log("Incoming GET /survey/stats");

    // Get all survey docs. For a huge DB you'd do aggregation,
    // but this is fine for class/project scale.
    const docs = await reports.find({ kind: "survey" }).toArray();

    const total = docs.length;
    if (total === 0) {
      return res.json({
        total: 0,
        averages: [],
      });
    }

    const numQuestions = docs[0].responses.length; // 10

    // Sum scores per question
    const sums = Array(numQuestions).fill(0);
    for (const doc of docs) {
      const resps = doc.responses || [];
      for (let i = 0; i < numQuestions; i++) {
        sums[i] += Number(resps[i] || 0);
      }
    }

    const averages = sums.map((sum) => sum / total);

    return res.json({
      total,
      averages, // e.g. [3, 3.5, 3, ...]
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;