import express from "express";
import { connectDB } from "./db.js";
import { Card } from "./models/Cards.js";
const app = express();
connectDB();
//app representa el servidor

app.use(express.json());
const card = await Card;

//CREATE CARD
app.post("/createCard", async (req, res) => {
  try {
    const createCard = card.create(req.body);
    console.log(card);
    res.status(201).send("Card created succsefully");
  } catch (error) {
    console.error(error.message);
  }
});
//UPDATE CARD
app.put("/updateCard/:id", async (req, res) => {
  try {
    const { id } = req.params; 
    const updates = req.body; 

    const updatedCard = await Card.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedCard) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.status(200).json({
      message: "Card updated successfully",
      data: updatedCard,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating card" });
  }
});

//DELETE CARD
app.delete("/deleteCard/:id", async (req, res) => {
  try {
    const { id } = req.params; //  se lee el ID de la URL
    const deletedCard = await Card.findByIdAndDelete(id); // aqui usar la varibale que esta hasta arriba que se llama card

    if (!deletedCard) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting card" });
  } 
});

//GET CARD
app.get("/getAllCards", async (req, res) => {
  try {
    const card = await Card.find(); //usar varaible varible card
    console.log(card);
    res.status(200).json(card);
  } catch (error) {
    console.error(error);
  }
});

app.get("/getCard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);
    res.status(200).json(card);
  } catch (error) {
    console.error(error);
  }
});

// app.post("/send", (req, res) => {
//   const { user, email } = req.body;
//   console.log("Datos recibidos:" + user + "" + email);

//   res.status(200).send("Data received succesfuly");
// });

// app.get("/hello", (req, res) => {
//   res.status(200).send("Hola mundo desde Node JS");
// });

// app.get("/hola", (req, res) => {
//   res.status(200).send("Hola world");
// });

app.listen(3000, () => {
  console.log("Servidor ejecutandose en https://localhost:3000");
});
