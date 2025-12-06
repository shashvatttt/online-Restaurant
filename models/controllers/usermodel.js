const mongoose = require('mongoose')

//schema
const userSchema = new mongoose.Schema({
    userName:{
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
    usertype:{
        type:String,
        required:'client',
        enum:['clinet', 'admin', 'vendor', 'driver']
    },
    profile:{
        type:String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
    }
},{timestamps:true})

//export
model.exports = mongoose.model("User", userSchema)