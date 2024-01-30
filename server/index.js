import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()

const PORT = process.env.PORT
const PASSWORD = process.env.PASSWORD
const URL = process.env.CON_URL.replace("<password>", PASSWORD)

const app = express()

app.use(cors())
app.use(express.json())





mongoose.connect(URL).catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`Server online at ${PROT} port!`);
})
