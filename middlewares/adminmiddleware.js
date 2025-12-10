const usermodel = require("../models/controllers/usermodel");

module.exports = async (req, res, next) => {
    try {
        // req.user is set by authmiddleware after verifying token
        const user = await usermodel.findById(req.user.id);

        if (!user || user.usertype !== "admin") {
            return res.status(403).send({
                success: false,
                message: "only admin access"
            });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Unauthorized access"
        });
    }
};
