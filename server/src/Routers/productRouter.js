import { AddToUserVending } from "../Funcs/AddToUserVending.js";
import { RemoveFromUserVending } from "../Funcs/RemoveFromUserVending.js";
import { BlockOtherUsers } from "../Middlewares/BlockOtherUsers.js";
import { CheckAdmin } from "../Middlewares/checkAdmin.js";
import { CheckOffer } from "../Middlewares/checkOffer.js";
import { CheckTime } from "../Middlewares/checkTime.js";
import { CheckToken } from "../Middlewares/checkToken.js";
import { CreateNewProduct, DeleteProductByID, GetProductByID, GetProducts, UpdateMaxBid } from "./../Controllers/productController.js";
import express from "express";


const router = express.Router()


// Post

router.post("/", CheckToken, CheckTime, CreateNewProduct, AddToUserVending)


// Get

router.get("/", GetProducts)

router.get("/:id", GetProductByID)

// Delete

router.delete("/:id", CheckToken, BlockOtherUsers, RemoveFromUserVending, DeleteProductByID)


// Put

router.put("/update-max-bid/:id", CheckToken, CheckOffer, UpdateMaxBid)

export default router