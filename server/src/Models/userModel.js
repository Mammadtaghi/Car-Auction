import mongoose from "mongoose";

const { Schema } = mongoose

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    role: { type: String, enum: ["user", "admin", "superadmin"], default: "user" },
    basket: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carschema'
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carschema'
    }],
    vending: [{ type: String }],
})

export const User = mongoose.model('AuctionUsers', userSchema)
