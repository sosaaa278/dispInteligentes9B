import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MONGO_URI = process.env.MONGO_URI //podrias poner el || localhost para cuando hagas pruebas locales
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("Mongo DB Connected succesfully")
  } catch (error) {
    console.error("Mongo DB Connection Failed", error.message);
  }
}