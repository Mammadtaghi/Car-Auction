import { Product } from "./../Models/productModel.js";


// Post

export async function CreateNewProduct(req, res) {
    try {
        const { title, image, info, openingBid, minBid, minStep } = req.body
        const newProduct = await Product.create({
            title: title,
            image: image,
            info: info,
            openingBid: openingBid,
            minBid: minBid,
            minStep: minStep,
        })
        console.log(newProduct.startTime);
        console.log(newProduct.endTime);
        res.status(200).send(`${newProduct.title} is created succesfully!`)
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
        const product = await Product.findById(id)
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