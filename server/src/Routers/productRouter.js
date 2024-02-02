import { CreateNewProduct, DeleteProductByID, GetProductByID, GetProducts } from "./../Controllers/productController.js";
import express from "express";


const router = express.Router()


// Post

router.post("/", CreateNewProduct)


// Get

router.get("/", GetProducts)

router.get("/:id", GetProductByID)

// Delete

router.delete("/:id", DeleteProductByID)



export default router