export async function CheckAdmin(req, res, next) {
    try {
        if (!req.role.includes('admin')) {
            res.status(406).json({ message: "You need to be an Admin to do this!" })
            return
        }
        console.log("Admin status...");
        next()
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}