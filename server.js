const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const reactFolder = path.resolve('./front/build');
const reactApp = path.resolve('./front/build/index.html');

app.use(cors());
app.use(express.static(reactFolder));

const data = [
  { id: 232323, label: 'TEXT213123' },
  { id: 232323, label: 'TEXT2222' },
  { id: 232323, label: 'TEX33333T' },
  { id: 232323, label: 'TEX444444T' },
];

app.get('/api', (req, res) => {
  res.json({ data });
});

app.get('*', (req, res) => {
  res.sendFile(reactApp);
});

app.listen(process.env.PORT || 2020);
