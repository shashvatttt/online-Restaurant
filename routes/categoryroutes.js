const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");
const { createCatController, getcategorycontroller, updatecategorycontroller, deletecategorycontroller } = require("../controllers/categorycontroller");

const router = express.Router();

//routes
//create cat
router.post('/create', authmiddleware, createCatController)

//get cat
router.get('/getall' , authmiddleware , getcategorycontroller)

//update cat
router.put('/update/:id' , authmiddleware, updatecategorycontroller)

//delete cat
router.delete('/delete/:id', authmiddleware, deletecategorycontroller)

module.exports = router;