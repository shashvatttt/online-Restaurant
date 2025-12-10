const foodmodel = require("../models/controllers/foodmodel");
const ordermodel = require("../models/controllers/ordermodel");


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

//get food by id 
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

//get food by res
const getfoodbyrescontroller = async(req, res) => {
    try {
        const resid = req.params.id
        if(!resid){
            return res.status(404).send({
                success:false,
                message:"Please provide id"
            })
        }
        const food = await foodmodel.find({resturant: resid})
        if(!food){
            return res.status(404).send({
                success:false,
                message:"No resturant found with this id"
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
            message:"error in get resturant food api",
            error
        })
    }
}

//update food
const updatefoodcontroller = async(req,res) => { 
    try {
        const foodid = req.params.id
        if(!foodid){
            return res.stats(404).send({
                success:false,
                message: 'no food id was found'
            })
        }
        const food = await foodmodel.findById(foodid)
        const {title, description, price, imageURL, foodtags, category,  code, isAvaiable, resturant, rating, ratingCount} = req.body
        const updatedfood = await foodmodel.findByIdAndUpdate(foodid, {title, description, price, imageURL, foodtags, category,  code, isAvaiable, resturant, rating, ratingCount} , {new:true})
        res.status(200).send({
            success:true,
            message:"food item was updated"
        })
        if(!food){
            return res.status(404).send({
                success:false,
                message:"error in update food api",
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in get update food api",
            error
        })
    }
}

//delete food
const deletefoodcontroller = async(req,res) => {
    try {
        const foodid = req.params.id
        if(!foodid){
            return req.status(404).send({
                success:true,
                message:"Put a food id"
            })
        }
        const food = await foodmodel.findByIdAndDelete(foodid);
        if(!food){
            return res.status(404).send({
                success:false,
                message:"No food dound with this id"
            })
        }
        await foodmodel.findByIdAndDelete(foodid)
        res.status(200).send({
            success:true,
            message:"food item deleted"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in get update food api",
            error
        })
    }
}

//place order
const placeordercontroller = async (req, res) => {
    try {
        const { cart, payment } = req.body
        if (!cart) {
            return res.status(500).send({
                success: false,
                message: "please food cart or payment method"
            })
        }

        let total = 0
        cart.map((i) => {
            total += i.price
        })

        const neworder = new ordermodel({
            foods: cart,
            payment: total,
            buyer: req.body.id
        })

        await neworder.save()

        res.status(201).send({
            success: true,
            message: 'order placed',
            neworder
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in get update food api",
            error
        })
    }
}

//change order status
const orderstatuscontroller = async(req,res) =>{
    try {
        const orderid = req.params.id
        if(!orderid){
            return res.status(404).send({
                success:false,
                message:"provide valid order id"
            })
        }
        const {status} = req.body
        const order = await ordermodel.findByIdAndUpdate(orderid,{status}, {new:true})
        res.status(200).send({
            success:true,
            message:"order status updated"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in get change order api",
            error
        })
    }
}

module.exports = {createfoodcontroller,getallfoodcontroller, orderstatuscontroller,getsinglefoodcontroller, getfoodbyrescontroller, updatefoodcontroller, deletefoodcontroller,  placeordercontroller}