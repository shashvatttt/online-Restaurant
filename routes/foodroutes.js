const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");
const { createfoodcontroller, getallfoodcontroller, getsinglefoodcontroller, getfoodbyrescontroller, updatefoodcontroller, deletefoodcontroller, placeordercontroller } = require("../controllers/foodcontroller");

const router = express.Router();

//routes
router.post('/create' , authmiddleware, createfoodcontroller)

//get all food
router.get('/getall' , getallfoodcontroller)

//get food by id
router.get('/get/:id', getsinglefoodcontroller)

//get food by res
router.get('/getbyres/:id', getfoodbyrescontroller)

//update food
router.put('/update/:id' , authmiddleware , updatefoodcontroller)

//delete food
router.delete('/delete/:id', authmiddleware , deletefoodcontroller)

//place order
router.post('/placeorder', authmiddleware, placeordercontroller)

module.exports = router;