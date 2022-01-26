require('dotenv').config(); // Put the .env file variable to process.env object;
const mongoose = require('mongoose');

const DB_URL = process.env.DATABASE_URL;

// console.log({ DB_URL });

module.exports = function(){
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Database Connected`);
    })
    .catch((err) => {
        console.log(`Database Error - ${err}`);
    })
}