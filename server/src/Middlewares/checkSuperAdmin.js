export async function CheckAdmin(req, res, next) {
    try {
        if (!req.role.includes('superadmin')) {
            res.status(406).json({ message: "You need to be SuperAdmin to do this!" })
            return
        }
        console.log(`Hello, ${req.username}!`);
        next()
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}