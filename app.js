const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
  const db = client.db('my-db');
  console.log('Connected to MongoDB');
});