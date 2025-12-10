const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");
const { createCatController, getcategorycontroller } = require("../controllers/categorycontroller");

const router = express.Router();

//routes
//create cat
router.post('/create', authmiddleware, createCatController)

//get cat
router.get('/getall' , authmiddleware , getcategorycontroller)


module.exports = router;