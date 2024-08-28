const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "feedback.html"));
});
app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "feedback.html"));
});

app.post("/submit", async (req, res) => {
  const {
    name,
    contact,
    date,
    reason,
    food_rating,
    ambience,
    service_rating,
    comment,
  } = req.body;
  try {
    await client.connect();
    const database = client.db("Signature_Spice");
    const collection = database.collection("feedback_form");

    const result = await collection.insertOne({
      name,
      contact,
      date,
      reason,
      food_rating,
      ambience,
      service_rating,
      comment,
      createdAt: new Date(),
    });

    res.redirect("index.html");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while submitting the form");
  } finally {
    await client.close();
  }
});
app.post("/booking-done", async (req, res) => {
  const { date, name, mobileno, email, request } = req.body;
  try {
    await client.connect();
    const database = client.db("Signature_Spice");
    const collection = database.collection("table-booking");

    const result = await collection.insertOne({
      date,
      name,
      mobileno,
      email,
      request,
      createdAt: new Date(),
    });
    res.redirect("index.html");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while submitting the form");
  } finally {
    await client.close();
  }
});
app.post("/contact", async (req, res) => {
  const { name, contact_us, comment } = req.body;
  try {
    await client.connect();
    const database = client.db("Signature_Spice");
    const collection = database.collection("contact-us");

    const result = await collection.insertOne({
      name,
      contact_us,
      comment,
      createdAt: new Date(),
    });

    res.redirect("index.html");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while submitting the form");
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
