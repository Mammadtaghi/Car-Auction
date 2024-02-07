import express from 'express'
import { ChangePassword, DeleteUserByID, GetUserByID, GetUsers, Login, Register } from "./../Controllers/userControllers.js";
import { CheckToken } from '../Middlewares/checkToken.js';

const router = express.Router()


// Post

router.post('/register', Register)

router.post('/login', Login)


// Get

router.get('/', GetUsers)

router.get('/:id', GetUserByID)


// Delete

router.delete('/:id', DeleteUserByID)


// Put

router.put("/change-password", CheckToken, ChangePassword)

export default router