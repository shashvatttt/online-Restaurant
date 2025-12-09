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

const getresturantcontroller = async (req,res) =>{
    try {
        const restaurants = await restaurantmodel.find({})
        if(!restaurants){
            return res.status(404).send({
                success:false,
                message:"No resturant available"
            })
        }
        res.status(200).send({
            success:true,
            totalcount:restaurants.length,
            restaurants
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in get resturant api",
            error
        })
    }
}

const getresturantbyid = async(req,res) => {
    try {
        const restaurantid = req.params.id
        if(!restaurantid){
            return res.status(404).send({
                success:false,
                message:"please provide resturant id"
            })
        }
        //find resturant
        const restuarnt = await restaurantmodel.findById(restaurantid)
        if(!restuarnt){
            return res.status(404).send({
                success:false,
                message:"Resturant not found"
            })
        }
        res.status(200).send({
            success:true,
            restuarnt
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in get resturant by id api",
            error
        })
    }
}

//delete resturant
const deleteresturantcontroller = async(req,res) => {
    try {
        const restaurantid = req.params.id
        if(!restaurantid){
            return res.status(404).send({
                success:false,
                message:"no resturant found "
            })
        }
        await restaurantmodel.findByIdAndDelete(restaurantid)
        res.status(200).send({
            success:true,
            message:"Resturant deleted succesfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in delete resturant api",
            error
        })
    }
}

module.exports = {createresturantcontroller, getresturantcontroller, getresturantbyid, deleteresturantcontroller}