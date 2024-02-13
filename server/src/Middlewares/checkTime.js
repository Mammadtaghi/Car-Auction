export async function CheckTime(req, res, next) {
    try {
        const { startTime, endTime } = req.body

        if (new Date(startTime).getTime() < new Date().getTime()) {
            console.log('test');
            res.status(406).json({ message: "It is not possible to start an auction in the past!" })
            return
        }

        if (new Date(startTime).getTime() > new Date(endTime).getTime()) {
            res.status(406).json({ message: "It is not possible to finish Auction before it starts!" })
            return
        }

        if ((new Date(endTime).getTime() - new Date(startTime).getTime()) < 1000 * 60 * 60 * 24) {
            res.status(406).json({ message: "The auction must last at least 1 day!" })
            return
        }

        next()
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}