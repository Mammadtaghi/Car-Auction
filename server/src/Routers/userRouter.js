import express from 'express'
import { DeleteUserByID, GetUserByID, GetUsers, Login, Register } from "./../Controllers/userControllers.js";

const router = express.Router()


// Post

router.post('/register', Register)

router.post('/login', Login)


// Get

router.get('/', GetUsers)

router.get('/:id', GetUserByID)


// Delete

router.delete('/:id', DeleteUserByID)

export default router