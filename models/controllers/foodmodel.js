const mongoose = require('mongoose')

//schema
const foodschema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'food title is required']
    },
    description:{
        type:String,
        required:[true, 'food description is requiered']
    },
    price:{
        type:Number,
        required:[true, 'food price is required']
    },
    imageURL:{
        type:String,
        default:"https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?semt=ais_hybrid&w=740&q=80"
    },
    foodtags: {
        type:String,
    },
    category:{
        type:String,
    },
    code:{
        type:String,
    },
    isAvaiable:{
        type:Boolean,
        default:true
    },
    resturant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'resturant'
    },
    rating:{
        type:Number,
        default:5,
        min:1,
        max:5
    },
    ratingCount:{
        type:String,
    },

},{timestamps:true})

//export
module.exports = mongoose.model("foods", foodschema)