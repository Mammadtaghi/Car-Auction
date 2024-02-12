import mongoose from "mongoose";
import schedule from "node-schedule";

const { Schema } = mongoose

const proSchema = new Schema({
    title: { type: String, required: true },
    image: {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
    },
    info: {
        model: { type: String, default: 'Tesla' },
        year: { type: Number, default: 2020 },
        body: { type: String, enum: ['Sedan', 'SUV', 'Sports', 'Convertible', 'Compact', 'Pickup', 'Crossover', 'Electric'], default: 'Electric' },
        color: { type: String, default: 'Red' },
        condition: { type: String, enum: ['Excellent', 'Good', 'Not Bad'], default: 'Good' }
    },
    Auctioneer: {
        type: mongoose.Types.ObjectId,
        ref: "AuctionUsers"
    },
    openingBid: { type: Number, required: true },
    minBid: { type: Number, required: true },
    minStep: { type: Number, required: true },
    maxBid: { type: Number, default: 0 },
    maxBidOffer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AuctionUsers"
    },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    isInAuc: { type: Boolean, default: false },
})



async function StartAuction(product) {
    schedule.scheduleJob(product.startTime, async () => {
        if (!product.isSaving) {
            product.isSaving = true; // Set the flag to indicate that save is in progress
            product.isInAuc = true;
            await product.save();
            product.isSaving = false; // Reset the flag after save is completed
            console.log("Auction started for product:", product.title);
        }
    });
}

async function EndAuction(product) {
    schedule.scheduleJob(product.endTime, async () => {
        if (!product.isSaving) {
            product.isSaving = true; // Set the flag to indicate that save is in progress
            product.isInAuc = false;
            await product.save();
            product.isSaving = false; // Reset the flag after save is completed
            console.log("Auction ended for product:", product.title);
        }
    });
}

proSchema.pre("save", async function (next) {
    await StartAuction(this);
    await EndAuction(this);
    next();
});

export const Product = mongoose.model("carschema", proSchema)