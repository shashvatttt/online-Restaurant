const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");
const { createresturantcontroller, getresturantcontroller } = require("../controllers/restaurantcontroller");

const router = express.Router();

//routes
//create restuarnt
router.post("/create", authmiddleware, createresturantcontroller)

//get resturants
router.get("/get", authmiddleware, getresturantcontroller)

module.exports = router;