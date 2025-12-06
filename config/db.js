const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to DATABASE ${mongoose.connection.host}`);
    } catch (error) {
        console.log('DB error', error);
    }
};

module.exports = connectDB;
