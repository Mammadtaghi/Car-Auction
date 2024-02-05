import mongoose from "mongoose";
import schedule from "node-schedule";

const { Schema } = mongoose

const proSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    info: { type: String, required: true },
    // categories: [{ type: String, required: true }],
    openingBid: { type: Number, required: true },
    minBid: { type: Number, required: true },
    minStep: { type: Number, required: true },
    // maxBid: { type: Number, default: 0 },
    // maxBidOffer: { type: String, default: "" }, // Relation here
    startTime: { type: Date, default: new Date(Date.now() + 1000 * 60 * 0.5) },
    endTime: { type: Date, default: new Date(Date.now() + 1000 * 60 * 1) },
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

export const Product = mongoose.model("bigprojects", proSchema)