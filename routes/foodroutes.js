const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");
const { createfoodcontroller, getallfoodcontroller, getsinglefoodcontroller } = require("../controllers/foodcontroller");

const router = express.Router();

//routes
router.post('/create' , authmiddleware, createfoodcontroller)

//get all food
router.get('/getall' , getallfoodcontroller)

router.get('/get/:id', getsinglefoodcontroller)

module.exports = router;