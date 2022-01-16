const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Put the .env file variable to process.env object;

console.log(process.env);
const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`);
})