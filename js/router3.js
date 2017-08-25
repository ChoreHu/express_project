var express = require('express');
var app = express();

//app.all是一个特殊的路由方法,可以接收任何类型的请求
app.all('/secret', function(req, res, next){
    res.send("hello world")
    next();
})
var server = app.listen(3000, function(){
    
})