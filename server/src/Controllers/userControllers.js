import { User } from "./../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


// Post

export async function Register(req, res) {
    try {
        const { username, password } = req.body

        const user = User.findOne({ username: username })

        if (user.role) {
            res.status(406).send(`${user.username} is used!`)
            return
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            username: username,
            password: hashedPass,
        })

        const token = jwt.sign({
            id: newUser._id,
            username: newUser.username,
            role: newUser.role,
            basket: newUser.basket,
            wishlist: newUser.wishlist,
            vending: newUser.vending
        }, "AlbiKey", { expiresIn: '3h' })

        res.status(200).json({
            message: `${newUser.username} successfully created!`,
            data: token
        })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}

export async function Login(req, res) {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username: username })

        if (!user) {
            res.status(406).send(`There is no ${username} named User!`)
            return
        }

        if (!(await bcrypt.compare(password, user.password))) {
            res.status(406).send("Username and Password doesn't match!")
            return
        }

        const token = jwt.sign({
            id: user._id,
            username: user.username,
            role: user.role,
            basket: user.basket,
            wishlist: user.wishlist,
            vending: user.vending
        }, "AlbiKey", { expiresIn: '3h' })

        res.status(200).json({
            message: `${user.username} successfully created!`,
            data: token
        })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}


// Get

export async function GetUsers(req, res) {
    try {
        const users = await User.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}

export async function GetUserByID(req, res) {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}


// Delete

export async function DeleteUserByID(req, res) {
    try {
        const { id } = req.params

        const foundUser = await User.findById(id)

        if (foundUser.role === 'superadmin') {
            res.status(406).json({ message: "Nice try!" })
            return
        }

        const user = await User.findByIdAndDelete(id)
        res.status(200).send(`${user.username} named ${user.role} is deleted succesfully!`)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}
