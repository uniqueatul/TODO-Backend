
const { error } = require("console");
const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUniFiedTopology: true,
    })
    .then(() => console.log("Db ka connection is successfull"))
    .catch((error) =>{
        console.log("issue in db connection");
        console.error(error.message);
        process.exit(1);

    });
}
module.exports = dbconnect;