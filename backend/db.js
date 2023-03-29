const mongoose = require('mongoose');


const url = "mongodb+srv://sushilssharma064:sushilssharma064@inotes.mg7rmdj.mongodb.net"

const connectToMongo = () => {
    mongoose.connect(url, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;