const express = require('express')
const { getUserController, updateUserController } = require('../controllers/usercontrollers')
const authmiddleware = require('../middlewares/authmiddleware')

const router = express.Router()

//routes
//get user
router.get('/getUser', authmiddleware,getUserController)

//update user
router.put('/updateUser', authmiddleware, updateUserController)


module.exports = router