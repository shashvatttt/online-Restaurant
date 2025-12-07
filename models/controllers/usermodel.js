const mongoose = require('mongoose')

//schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'username is required']
    },
    email:{
        type:String,
        required:[true, 'email is requiered'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'password is required']
    },
    address:{
        type:Array,
    },
    phone:{
        type:String,
        required:[true, 'phone number is requiered']
    },
    usertype: {
        type: String,
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver']
    },
    profile:{
        type:String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
    }
},{timestamps:true})

//export
module.exports = mongoose.model("User", userSchema)