const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const db = require('./config/db');

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

app.get('/api/test-db', (req, res) => {
  db.query('SHOW TABLES', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));

module.exports = app;
