import express from "express";
import { connectDB } from "./db.js";
import { Card } from "./models/Cards.js";
const app = express();
connectDB();
//app representa el servidor

app.use(express.json());

app.post("/createCard", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    console.log(card);
    res.status(201).send("Card created succsefully");
  } catch (error) {
    console.error(error.message);
  }
});
app.get("/getAllCards", async (req, res) => {
  try {
    const card = await Card.find();
    console.log(card);
    res.status(200).send("Card created succsefully", card);
  } catch (error) {
    console.error(error);
  }
});

app.get("/getCard/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const card = await Card.find();
    console.log(card);
    res.status(200).send("Card created succsefully", card);
  } catch (error) {
    console.error(error);
  }
});
app.post("/send", (req, res) => {
  const { user, email } = req.body;
  console.log("Datos recibidos:" + user + "" + email);

  res.status(200).send("Data received succesfuly");
});

app.get("/hello", (req, res) => {
  res.status(200).send("Hola mundo desde Node JS");
});

app.get("/hola", (req, res) => {
  res.status(200).send("Hola world");
});

app.listen(3000, () => {
  console.log("Servidor ejecutandose en https://localhost:3000");
});
