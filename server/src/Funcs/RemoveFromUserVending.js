import { Product } from "../Models/productModel.js";
import { User } from "../Models/userModel.js";

export async function RemoveFromUserVending(req, res, next) {
    try {
        const { id } = req.params
        
        const foundUser = await User.findById(req.id)

        console.log([...foundUser.vending]);
        
        const foundProduct = await Product.findById(id)

        const updatedVending = [...foundUser.vending.filter(x => x._id.toString() !== id.toString())]

        console.log(updatedVending);
        
        console.log(`Updating ${foundUser.username}'s vending...`);

        const user = await User.findByIdAndUpdate(req.id, { vending: updatedVending })

        console.log(`${foundProduct.title} deleted successfully by ${req.role} ${req.username}!`);

        next()
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}
