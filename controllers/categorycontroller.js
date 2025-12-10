const categorymodel = require("../models/controllers/categorymodel")

//create cat
const createCatController = async(req,res) =>{
    try {
        const {title, imgageURL} = req.body;
        //validation
        if(!title){
            return res.status(500).send({
                success:false,
                message:"Please provide category title"
            })
        }
        const newcategory = new categorymodel({title})
        await newcategory.save()
        res.status(200).send({
            success:true,
            message:'Categorgy created',
            newcategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in create cat api",
            error
        })
    }
}

module.exports = {createCatController}