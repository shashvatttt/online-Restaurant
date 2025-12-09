const express = require('express')
const { getUserController, updateUserController, resetpasswordcontroller, deleteprofilecontroller } = require('../controllers/usercontrollers')
const authmiddleware = require('../middlewares/authmiddleware')

const router = express.Router()

//routes
//get user
router.get('/getUser', authmiddleware,getUserController)

//update user
router.put('/updateUser', authmiddleware, updateUserController)

//reset password
router.post('/resetpassword', authmiddleware, resetpasswordcontroller)

//delete user
router.delete('/deleteuser/:id', authmiddleware, deleteprofilecontroller)


module.exports = router