const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//dotenv config
dotenv.config();

//db connection
connectDB();

//rest object
const app = express();

//express will use this to parse json from request
app.use(express.json());


//routes
app.use('/api/v1/test', require('./routes/testroute'));
app.use('/api/v1/auth', require('./routes/authroutes'));
app.use('/api/v1/user', require('./routes/userroutes'));
app.use('/api/v1/restaurant', require('./routes/restaurantroutes'))

app.get('/', (req, res) => {
    return res.status(200).send("<h1> Welcome to food server </h1>");
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
