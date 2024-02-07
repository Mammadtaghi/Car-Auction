import { User } from "../Models/userModel.js";

export async function AddToUserVending(req, res) {
    try {
        const foundUser = await User.findById(req.id)
        
        const updatedVending = [...foundUser.vending, req.newProduct._id]

        console.log(`Updating ${foundUser.username}'s vending...`);

        const user = await User.findByIdAndUpdate(req.id, { vending: updatedVending })

        res.status(200).json({
            message: `${req.newProduct.title} created successfully by ${req.role} ${req.username}!`
        })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}
