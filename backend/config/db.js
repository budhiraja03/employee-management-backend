const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
        console.log("mongoDB connected");
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectToDB;