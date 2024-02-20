import { Product } from "../Models/productModel.js"

export async function CheckOffer(req, res, next) {
    try {
        const { id } = req.params
        const { bid } = req.body

        const product = await Product.findById(id).populate('Auctioneer')

        console.log("Checking Auction Date...");

        if (new Date(product.startTime).getTime() > Date.now()) {
            res.status(406).json({ message: "Auction haven't started yet!" })
            return
        }

        if (new Date(product.endTime).getTime() < Date.now()) {
            res.status(406).json({ message: "Auction ended!" })
            return
        }

        console.log("Checking Offer...");

        // Don't let Auctioneer to buy his/her own product !
        if (product.Auctioneer._id.toString() === req.id.toString()) {
            res.status(406).json({ message: "You can't buy your own product!" })
            return
        }

        // Check if Bid is less than the last bid
        if ((product.maxBid ? product.maxBid : product.openingBid) + product.minStep > bid) {
            res.status(406).json({ message: "Your bid isn't efficiant!" })
            return
        }

        console.log("Bid is efficiant...");
        next()
    } catch (error) {
        res.status(500).json({ message: "Server error!" })
    }
}