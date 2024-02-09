import { Product } from "../Models/productModel.js"

export async function BlockOtherUsers(req, res, next) {
    try {
        const { id } = req.params

        const foundProduct = await Product.findById(id)

        if (!foundProduct) {
            res.status(406).json({ message: "This product doesn't exist!" })
            return
        }

        if (!req.role.includes('admin') && req.username !== foundProduct.Auctioneer.username) {
            res.status(406).json({ message: "You need to be product owner or an admin to delete this product!" })
            return
        }

        next()
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}