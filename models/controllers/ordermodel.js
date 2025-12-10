const mongoose = require('mongoose')

//schema
const orderschema = new mongoose.Schema({
    foods:[
        {type: mongoose.Schema.Types.ObjectId,
        ref:'foods'}
    ],
    payment:{

    },
    buyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    status:{
        type:String,
        enum:['preparing','prepare','on the way' , 'delivered'],
        default:'preparing'
    }


},{timestamps:true})

//export
module.exports = mongoose.model("orders", orderschema)