import { Product } from "../Models/productModel.js";
import { User } from "../Models/userModel.js";

export async function RemoveFromUserVending(req, res, next) {
    try {
        const { id } = req.params
        
        const foundProduct = await Product.findById(id).populate(['Auctioneer'])
        
        console.log(foundProduct);

        const foundUser = await User.findById(foundProduct.Auctioneer._id)

        const updatedVending = [...foundUser.vending.filter(x => x._id.toString() !== id.toString())]

        console.log(`Updating ${foundUser.username}'s vending...`);

        const user = await User.findByIdAndUpdate(foundProduct.Auctioneer._id, { vending: updatedVending })

        console.log(`${foundProduct.title} deleted successfully by ${req.role} ${req.username}!`);

        next()
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}
