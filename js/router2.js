var express = require('express');
var app = express();

//respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//     res.send('hello world');
// })

//如何请求post?通过form表单吗?
// app.post('/', function(req, res) {
//     res.send('POST request')
// })

//app.all是一个特殊的路由方法,可以接收任何类型的请求
app.all('/secret', function(req, res, next){
    res.send("hello world")
    next();
})
var server = app.listen(3000, function(){
    
})