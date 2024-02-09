import { User } from "../Models/userModel.js";
import { Product } from "./../Models/productModel.js";
import cloudinary from "../Utils/cloudinary.js";


// Post

export async function CreateNewProduct(req, res, next) {
    try {
        const { title, image, info, openingBid, minBid, minStep, startTime = Date.now(), endTime = Date.now() } = req.body

        const user = await User.findById(req.id)

        const result = await cloudinary.uploader.upload(image, {
            folder: "products"
        })

        const newProduct = await Product.create({
            title: title,
            image: {
                public_id: result.public_id,
                url: result.secure_url,
            },
            info: info,
            Auctioneer: user,
            openingBid: openingBid,
            minBid: minBid,
            minStep: minStep,
            startTime: startTime,
            endTime: endTime,
        })
        req.newProduct = newProduct
        console.log(newProduct.startTime);
        console.log(newProduct.endTime);
        console.log(`${newProduct.title} is created succesfully!`);
        next()
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}


// Get

export async function GetProducts(req, res) {
    try {
        const products = await Product.find()
        res.status(200).send(products)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}

export async function GetProductByID(req, res) {
    try {
        const { id } = req.params
        const product = await Product.findById(id).populate(['Auctioneer', 'maxBidOffer'])
        res.status(200).send(product)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}


// Delete

export async function DeleteProductByID(req, res) {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        res.status(200).send(`${product.title} is deleted succesfully by ${req.role} ${req.username}!`)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}


// Put

export async function UpdateMaxBid(req, res) {
    try {
        const { id } = req.params
        const { bid } = req.body

        const user = await User.findById(req.id)

        const product = await Product.findByIdAndUpdate(id, { maxBid: bid, maxBidOffer: user })

        res.status(202).json({ message: `${user.username} now you have the highest bid on ${product.title}!` })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}
