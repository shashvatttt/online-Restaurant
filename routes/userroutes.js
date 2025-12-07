const express = require('express')
const { getUserController } = require('../controllers/usercontrollers')
const authmiddleware = require('../middlewares/authmiddleware')

const router = express.Router()

//routes
//get user
router.get('/getUser', authmiddleware,getUserController)


module.exports = router