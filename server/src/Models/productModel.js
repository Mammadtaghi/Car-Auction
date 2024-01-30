import mongoose from "mongoose";

const { Schema } = mongoose

// Not Ready!
const proSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    info: { type: String, required: true },
    categories: [{ type: String, required: true }],
})

export const Product = mongoose.model("BigProject", proSchema)