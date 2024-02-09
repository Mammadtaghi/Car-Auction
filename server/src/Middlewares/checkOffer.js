import { Product } from "../Models/productModel.js"

export async function CheckOffer(req, res, next) {
    try {
        const { id } = req.params
        const { bid } = req.body

        const product = await Product.findById(id).populate('Auctioneer')

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