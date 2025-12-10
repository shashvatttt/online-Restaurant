const mongoose = require('mongoose')

//schema
const categoryschema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'category title is required']
    },
    imageURL:{
        type:String,
        default:"https://i.pinimg.com/564x/a2/4c/bc/a24cbca8d20caeb51b9df95eeff79a5f.jpg"
    }
},{timestamps:true})

//export
module.exports = mongoose.model("category", categoryschema)