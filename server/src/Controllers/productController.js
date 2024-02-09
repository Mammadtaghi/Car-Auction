import { User } from "../Models/userModel.js";
import { Product } from "./../Models/productModel.js";


// Post

export async function CreateNewProduct(req, res, next) {
    try {
        const { title, image, info, openingBid, minBid, minStep, startTime = Date.now(), endTime = Date.now() } = req.body

        const user = await User.findById(req.id)

        const newProduct = await Product.create({
            title: title,
            image: image,
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
        res.status(200).send(`${product.title} is deleted succesfully!`)
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

        res.status(202).json({ message: `${user.username} you have the highest bid on ${product.title} product!` })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}
