const express = require("express");
const mongoose = require("mongoose");
const Cards = require("./models/Cards");
const dotenv = require("dotenv");
const path = require('path');
dotenv.config();

// configure the app

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// configure database

mongoose.connect(process.env.connection_url, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info("Configured to DB");
  }
});

// Endpoints

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post("/dating/cards", (req, res) => {
  const Card = req.body;
  Cards.create(Card, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`listening on localhost: ${port}`));
