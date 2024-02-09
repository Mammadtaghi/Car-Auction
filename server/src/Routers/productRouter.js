import { AddToUserVending } from "../Funcs/AddToUserVending.js";
import { RemoveFromUserVending } from "../Funcs/RemoveFromUserVending.js";
import { CheckAdmin } from "../Middlewares/checkAdmin.js";
import { CheckOffer } from "../Middlewares/checkOffer.js";
import { CheckToken } from "../Middlewares/checkToken.js";
import { CreateNewProduct, DeleteProductByID, GetProductByID, GetProducts, UpdateMaxBid } from "./../Controllers/productController.js";
import express from "express";


const router = express.Router()


// Post

router.post("/", CheckToken, CreateNewProduct, AddToUserVending)


// Get

router.get("/", GetProducts)

router.get("/:id", GetProductByID)

// Delete

router.delete("/:id", CheckToken, RemoveFromUserVending, DeleteProductByID)


// Put

router.put("/update-max-bid/:id", CheckToken, CheckOffer, UpdateMaxBid)

export default router