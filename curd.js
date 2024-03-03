const express = require("express");
const router = express.Router();
const { MyBudget} = require("./curd_mongoose");

// Fetch data from the database
router.get("/myBudget", async (req, res) => {
  try {
    const entries = await MyBudget.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Add new data to the database
router.post("/myBudget", async (req, res) => {
  console.log(req.body);
  const entry = new MyBudget({
    title: req.body.title,
    budget: req.body.budget,
    colorCode: req.body.colorCode,
  });

  try {
    const newEntry = await entry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;