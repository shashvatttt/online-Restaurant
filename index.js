const express = require('express')

//rest object
const app = express()

//route
app.use('/api/v1/test' , require("./routes/testroute"))

app.get('/', (req,res)=>{
    return res.status(200).send("<h1> Welcome to food server </h1>")
})

//port
const PORT = 8080

//listen
app.listen(PORT, ()=>{
    console.log("Server Running")
})