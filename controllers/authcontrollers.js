const userModel = require('../models/controllers/usermodel.js');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const registerController = async (req,res) => {
try {
    const {username, email, password, phone, address, answer} = req.body
    //valdiation
    if(!username || !email || !address || !phone || !answer){
        return res.status(500).send({
            success:false,
            message:'Please provide all fields'
        })
    }
    //check user
    const existing = await userModel.findOne({email: email, password: password})
    if(existing){
        return res.status(500).send({
            success:false,
            message:'Email already registered'
        })
    }
    //hashing passowrd
    var salt = bcrypt.genSaltSync(10);
    const hashedpassword = await bcrypt.hash(password, salt)
    // create new user
    const user = await userModel.create({
      username, 
      email, 
      password:hashedpassword, 
      address, 
      phone,
      answer
    });
    res.status(201).send({
        success:true,
        message: "Successfully Registered",
    })
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in Register API',
        error
    })
}
};

const loginController = async (req,res) => {
    try {
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(500).send({
                success:false,
                message:"Please provide Email or password"
            })
        }
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User not found"
            })
        }
        //check usrpass / compare pas
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
          return res.status(500).send({
            success:false,
            message: "Invalid Credentials",
          })
        }
        //token
        const token = JWT.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        })

        user.password = undefined;
        res.status(200).send({
            success:true,
            message:"Login Successfully",
            token,
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in login API",
            error
        })
    }
}


module.exports = {registerController , loginController};