const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const data = [
  { id: 232323, label: 'TEXT213123' },
  { id: 232323, label: 'TEXT2222' },
  { id: 232323, label: 'TEX33333T' },
  { id: 232323, label: 'TEX444444T' },
];

app.get('/api', (req, res) => {
  res.json({ data });
});

app.listen(process.env.PORT || 2020);
