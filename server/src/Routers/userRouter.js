import express from 'express'
import { ChangePassword, DeleteUserByID, DemoteToUser, GetUserByID, GetUsers, Login, PromoteAsAdmin, Register } from "./../Controllers/userControllers.js";
import { CheckToken } from '../Middlewares/checkToken.js';
import { CheckSuperAdmin } from '../Middlewares/checkSuperAdmin.js';

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

router.put("/promote/:id", CheckToken, CheckSuperAdmin, PromoteAsAdmin)

router.put("/demote/:id", CheckToken, CheckSuperAdmin, DemoteToUser)

export default router