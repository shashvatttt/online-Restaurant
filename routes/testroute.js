const express = require('express')
const { testcontroller } = require('../controllers/testcontroller')

//router object
const router = express.Router()

//routes
router.get('/test-user', testcontroller)

//exprt
module.exports = router

