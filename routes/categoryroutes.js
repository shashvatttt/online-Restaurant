const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");
const { createCatController } = require("../controllers/categorycontroller");

const router = express.Router();

//routes
router.post('/create', authmiddleware, createCatController)

module.exports = router;