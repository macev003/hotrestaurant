const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000; //change to process.env.PORT when deploying

let tables = [];
let waitList = [];


//sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res){
    return res.json(tables);
})

app.get("/api/waitList", function(req, res){
    return res.json(waitList);
});

app.post("/api/tables", function(req, res){
    const data = req.body;
   // console.log(data);
   if(table.length> 3) {
       waitList.push(data);
   } else {
       tables.push(data);
   }
   console.log("Tables:", tables);
   console.log("Wait List:", waitList)
});

app.post("/api/clear", function(req, res){
    tables = [];
    waitList = [];

    console.log("Tables:", tables);
    console.log("Wait List:", waitList);
})

app.listen(PORT, function(){
    console.log("App Running"+ PORT);
});
