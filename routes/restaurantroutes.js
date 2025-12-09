const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");
const { createresturantcontroller } = require("../controllers/restaurantcontroller");

const router = express.Router();

//routes
//create restuarnt
router.post("/create", authmiddleware, createresturantcontroller)
module.exports = router;