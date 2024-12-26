const express = require('express');

const app = express();
// Cors for cross origin allowance
const cors = require('cors');

// middle-ware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // no need to parse nested objects

// point to front-end folder
app.use(express.static('website'));

// store date posted from the front-end
let projectData = {};

app.get('/all', (req, res) => {
  res.json(projectData);
});

app.post('/data', (req, res) => {
  const { body } = req;
  projectData = { ...body };
  res.send({ message: 'Data is updated successfully!' });
});

app.listen(3000, () => {
  console.log('Start server on port 3000 🚀');
});
