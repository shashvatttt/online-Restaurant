const JWT = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        // get token
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(401).send({
                success: false,
                message: "Please provide Auth token"
            })
        }

        const token = authHeader.split(" ")[1];

        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: 'Un-Authorize User'
                })
            } else {
                req.user = { id: decode.id }   // saving user id
                next();                        // move ahead
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Internal error"
        })
    }
}
