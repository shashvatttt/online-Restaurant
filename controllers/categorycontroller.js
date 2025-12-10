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

//get all category
const getcategorycontroller = async(req,res) =>{
    try {
        const categories = await categorymodel.find({})
        if(!categories){
            return res.status(404).send({
                success:false,
                message:"No categories found"
            })
        }

        return res.status(200).send({
            success: true,
            message: "All categories fetched",
            categories
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Fault at get all categorgy api",
            error
        })
    }
}

//update category
const updatecategorycontroller = async(req,res) =>{
    try {
        const {id} = req.params
        const {title, imageURL} = req.body
        const updatedcategory = await categorymodel.findByIdAndUpdate(id, {title, imageURL} , {new:true})
        if(!updatedcategory){
            return res.status(500).send({
                success:false,
                message:"No category found"
            })
        }
        res.status(200).send({
            success:true,
            message:"Category updated"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in update cat api",
            error
        })
    }
}

//delete category
const deletecategorycontroller = async(req,res) =>{
    try {
        const {id} = req.params
        if(!id){
            return res.status(500).send({
                success:false,
                message:"Please provide category ID"
            })
        }
        const categorgy = await categorymodel.findByIdAndDelete(id)
        if(!categorgy){
            return res.status(500).send({
                success:false,
                message:"No category found"
            })
        }
        res.status(200).send({
            success:true,
            message:"Category deleted"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in update cat api",
            error
        })
    }
}

module.exports = {createCatController, getcategorycontroller, updatecategorycontroller, deletecategorycontroller}