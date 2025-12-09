const restaurantmodel = require("../models/controllers/restaurantmodel");

//create restuartant
const createresturantcontroller = async (req,res) => {
    try {
        const {title,imageURL,foods,time,pickup,delivery,isOpen,logoURL,rating,coords} = req.body
        //validation
        if(!title ){
            return res.status(500).send({
                success:false,
                message:"Provide title and address"
            })
        }
        const newresturant = new restaurantmodel({
            title,imageURL,foods,time,pickup,delivery,isOpen,logoURL,rating,coords
        })
        await newresturant.save()
        res.status(201).send({
            success:true,
            message:"New resturant created"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in create restuarnt api',
            error
        })
    }
};

module.exports = {createresturantcontroller}