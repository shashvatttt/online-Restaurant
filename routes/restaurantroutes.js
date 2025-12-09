const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");
const { createresturantcontroller, getresturantcontroller, getresturantbyid } = require("../controllers/restaurantcontroller");

const router = express.Router();

//routes
//create restuarnt
router.post("/create", authmiddleware, createresturantcontroller)

//get resturants
router.get("/get", authmiddleware, getresturantcontroller)

//get resturant by id
router.get("/get/:id", authmiddleware, getresturantbyid )

module.exports = router;