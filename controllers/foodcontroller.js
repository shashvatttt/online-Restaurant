const foodmodel = require("../models/controllers/foodmodel");


//create food
const createfoodcontroller = async(req,res) =>{
    try {
        const {title, description, price, imageURL, foodtags, category,  code, isAvaiable, resturant, rating, ratingCount} = req.body
        if(!title || !description || !price || !resturant){
            return res.status(500).send({
                success:false,
                message:"Please provide all fields"
            })
        }
        const newfood = new foodmodel({title, description, price, imageURL, foodtags, category,  code, isAvaiable, resturant, rating, ratingCount})
        await newfood.save()
        res.status(201).send({
            success:true,
            message:"New food item created",
            newfood
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in create food api",
            error
        })
    }
}


//get all food
const getallfoodcontroller = async (req,res) =>{
    try {
        const foods = await foodmodel.find({})
        if(!foods){
            return res.status(404).send({
                success:false,
                message:"no food items was found"
            })
        }
        res.status(200).send({
            success:true,
            totalfoods: foods.length,
            foods
        })
    } catch (error) {
        console.log(error)
        req.status(500).send({
            success:false,
            message:"Error in get all food api",
            error
        })
    }
}

const getsinglefoodcontroller = async(req, res) => {
    try {
        const foodid = req.params.id
        const food = await foodmodel.findById(foodid)
        if(!food){
            return res.status(404).send({
                success:false,
                message:"No food found with this id"
            })
        }
        if(!foodid){
            return res.status(404).send({
                success:false,
                message:"Please provide id"
            })
        }
        res.status(200).send({
            success:true,
            food
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in get single food api",
            error
        })
    }
}

module.exports = {createfoodcontroller,getallfoodcontroller, getsinglefoodcontroller}