const usermodel = require("../models/controllers/usermodel");
const bcrypt = require("bcrypt");

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

//reset pass
const resetpasswordcontroller = async(req,res) => {
    try {
        const {email, newpassword, answer} = req.body
        if(!email || !newpassword || !answer){
            return res.status(500).send({
                success:false,
                message:'Please provvide all fields'
            })
        }
        const user = await usermodel.findOne({email, answer})
        if(!user){
            return res.status(500).send({
                success:false,
                message:'User Not found or invalid answer'
            })
        }
        //hashing passs
        var salt = bcrypt.genSaltSync(10);
        const hashedpassword = await bcrypt.hash(newpassword, salt)
        user.password = hashedpassword
        await user.save()
        res.status(200).send({
            success:true,
            message: "password reset succesfully"
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'error in password reset api',
            error
        })
    }
}

module.exports = {getUserController, updateUserController, resetpasswordcontroller}