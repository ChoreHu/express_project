var express = require('express');
var app = express();

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function(req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function(req, res) {
    res.send('Hello from C!');
}

app.get('/', [cb0, cb1], function(req, res, next){
    console.log("from cb0 to cb1");
    next();
},function (req, res){
    res.send('Hello from D!')
});
var server = app.listen(3000, function(){
    
})