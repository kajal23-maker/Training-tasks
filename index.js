const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const router = require('./routes/routes');
const ejs = require('ejs');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
const connection = async () =>{
    mongoose.connect("mongodb://localhost:27017/test")
    .then(()=>{
        console.log("database connected...");
    })
    .catch((e)=>{
        console.log(e);
        process.exit(1);
    })
}

//database connection
connection();

app.use('/', router);
app.set("view engine", "ejs");

app.listen(3000, (req, res)=> console.log("Server is running on port 3000..."));