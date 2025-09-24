const express = require("express");
const app = express();

app.get("/api", (req,res) => {

    res.json({ fruits: ["apple", "banana", "john"]})
});

app.listen(8080,() => {
    console.log("api listening on 8080")
});