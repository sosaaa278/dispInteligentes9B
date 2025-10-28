import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      // podrías agregar una validación o longitud mínima para el nombre :)
    },
    link: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Card = mongoose.model("Card", cardSchema);
