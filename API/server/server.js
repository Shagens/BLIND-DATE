import express from "express";
import mongoose from "mongoose";
import Cards from "./Cards";
import dotenv from "dotenv";
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

app.get("/", (req, res) => res.status(200).send("Hello"));

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
