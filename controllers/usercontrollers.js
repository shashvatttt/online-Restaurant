const usermodel = require("../models/controllers/usermodel");

//get user info
const getUserController = async(req,res) => {
    try {
        //find user
        const user = await usermodel.findById({_id:req.user.id}, {_id: 0})
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:"user not found"

            })
        }
        //hide password
        user.password = undefined
        //response
        res.status(200).send({
            success:true,
            message:"User get successfully",
            user
        })
    } catch (error) {
        console.log(error)
        req.status(500).send({
            success:flase,
            message:"Error in User Api",
            error
        })
    }
};

//update user
const updateUserController = async (req, res) => {
    try {
        //find user
        const user = await usermodel.findById({_id: req.user.id})
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:'user not found'
            })
        }
        //update
        const {username, phone} = req.user
        if(username) user.username = username
        if(phone) user.phone = phone
        //save user
        await user.save()
        res.status(200).send({
            success:true,
            message:"user update succesfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in update API",
            error
        })
    }
}


module.exports = {getUserController, updateUserController}