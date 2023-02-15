var express = require("express");
var bodyparser = require("body-parser");
var app = express();
var userRoutes = require("./routes/routes");

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use("/", userRoutes);

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})