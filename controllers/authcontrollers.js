const registerController = async (req,res) => {
try {
    const {username, email, password, phone, address} = req.body
    //valdiation
    if(!username || !email || !address || !phone){
        return res.status(500).send({
            success:false,
            message:'Please provide all fields'
        })
    }
    //check user
    const existing = await userModel.findOne({email})
    if(existing){
        return res.status(500).send({
            success:false,
            message:'Email already registered'
        })
    }
    // create new user
    const user = await userModel.create({userName, email, password, address, phone})
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

}

module.exports = {registerController};