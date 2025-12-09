const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");
const { createresturantcontroller, getresturantcontroller, getresturantbyid, deleteresturantcontroller } = require("../controllers/restaurantcontroller");

const router = express.Router();

//routes
//create restuarnt
router.post("/create", authmiddleware, createresturantcontroller)

//get resturants
router.get("/get", authmiddleware, getresturantcontroller)

//get resturant by id
router.get("/get/:id", authmiddleware, getresturantbyid )

//delete resturant
router.delete("/delete/:id" , authmiddleware, deleteresturantcontroller)

module.exports = router;