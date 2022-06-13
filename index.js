//Pakket binnen halen
const express = require("express");

//Applicatie instantieren (constructor)
const app = express();

//Endpoint aanmaken
app.get("/", function(req, res){
   res.send("Hello world!") 
})

app.listen(1297);

console.log("Hello, world!");