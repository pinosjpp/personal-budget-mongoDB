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

const express = require('express');
const fs = require('fs'); 
const app = express();
const port = 3000;

app.use('/', express.static('public'));

let budgetData = {};

const rawData = fs.readFileSync('budget_data.json');
budgetData = JSON.parse(rawData);

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budgetData);
});

app.listen(port, () => {
    console.log(`Example app liostening at http://localhost:${port}`);
});