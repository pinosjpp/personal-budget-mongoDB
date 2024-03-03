// Budget API

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 3000;

// app.use(cors());

// const budget = {
//     myBudget: [
//         {
//             title: 'Eat out',
//             budget: 25
//         },
//         {
//             title: 'Rent',
//             budget: 275
//         },
//         {
//             title: 'Grocery',
//             budget: 110
//         },
//     ]
// };


// app.get('/budget', (req, res) => {
//     res.json(budget);
// });

// app.listen(port, () => {
//     console.log(`API served at http://localhost:${port}`);
// });

// const express = require('express');
// const fs = require('fs'); 
// const app = express();
// const port = 3000;

// app.use('/', express.static('public'));

// let budgetData = {};

// const rawData = fs.readFileSync('budget_data.json');
// budgetData = JSON.parse(rawData);

// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/budget', (req, res) => {
//     res.json(budgetData);
// });

// app.listen(port, () => {
//     console.log(`Example app liostening at http://localhost:${port}`);
// });


// Budget API

const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const mongoose = require("mongoose");
bodyParser = require("body-parser");
const app = express();
const port = 3000;
const chart_Data = require("./budget_data.json");
var pie_chartData = chart_Data;
var dJs_data = chart_Data.DChart;
const url = "mongodb://localhost:27017";
const dbName = "chatDb";
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/", express.static("public"));
app.get("/hello", (req, res) => {
  res.send("hello");
});
mongoose
  .connect("mongodb://localhost:27017/mongoDbDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the application if unable to connect to the database
  });

// app.get("/budget", (req, res) => {
//   res.json(pie_chartData);
// });

const entriesRouter = require("./curd");
app.use("/api", entriesRouter);

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});