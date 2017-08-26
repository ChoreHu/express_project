var express = require('express');
var app = express();

app.get('/', function(req, res, next){
    // res.send("hello from A")
    debugger
    console.log("this is my first response");
    next();
}, function(req, res){
    res.send("hello from B")
})
var server = app.listen(3000, function(){
    
})