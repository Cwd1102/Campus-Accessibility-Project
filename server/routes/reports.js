const express = require("express");
const router = express.Router();
const { connectDB, getClient, ObjectId } = require("../db/mongo");


router.post("/create", async (req, res) => {
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

router.post("/find", async (req, res) => {
  try{

    // Reuse existing Mongo client and ensure connection
    const db = await connectDB();
    const reports = db.collection("reports");
    console.log("Incoming POST /delete");

    const id = req.body; // replace with your actual ObjectId
    const result = await reports.findOne({ _id: new ObjectId(id) });

    console.log(result);
    res.json(result)
  }catch(err){
    console.error("Error finding file", err)
    res.status(500).json({error: "Failed to find"})
  }

});


router.post("/delete", async (req,res) => {

  try{

    // Reuse existing Mongo client and ensure connection
    const db = await connectDB();
    const reports = db.collection("reports");
    console.log("Incoming POST /delete");

    const id = req.body; // replace with your actual ObjectId
    const result = await reports.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      console.log("Document deleted");
    } else {
      console.log("No matching document found");
    }

    console.log(result);
    res.json(result)
  }catch(err){
    console.error("Error finding file", err)
    res.status(500).json({error: "Failed to find"})
  }

  });

router.get("/loadpage", async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  try{
    const db = await connectDB();
    const reports = db.collection("reports");
    console.log("Incoming POST /loadpage");

    const docs = await reports.find({}).sort({timestamp: -1}).skip(skip).limit(limit).toArray();

    res.json(docs);
  }catch(err){
    console.error(err);
    res.status(500).json({error: err.message});

  }


});

module.exports = router;