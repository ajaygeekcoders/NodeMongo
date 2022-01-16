const express = require('express');
const bodyParser = require('body-parser');
const logging = require('./src/middleware/logging');
const dbConnect = require('./src/config/db');
require('dotenv').config(); // Put the .env file variable to process.env object;

const app = express();
const PORT = process.env.PORT || 3000;

// Modify the request body data in readble format whether it's in query, params or body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database connection
dbConnect(process.env.DATABASE_URL); 

// log every url path with it's method
app.use(logging);

let routes = require('./src/routes');
routes(app);

app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`);
})


function add(a){
    function adds(b){
        return a + b;
    }
    return adds;
}

console.log(add(10)(10));