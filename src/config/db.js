const mongoose = require('mongoose');

module.exports = function(DB_URL){
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Database Connected`);
    })
    .catch((err) => {
        console.log(`Database Error - ${err}`);
    })
}