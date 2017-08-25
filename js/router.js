var express = require("express");
var app = express();

//对网站首页的访问返回"Hello World"
app.get('/', function (req, res) {
    res.send('Hello World!');
})

//网站首页接受 POST 请求
app.post('/', function(req, res) {
    res.send('Got a POST request');
})

// /user节点接收 PUT 请求
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

// /user节点接收DELETE请求
app.delete('/user', function(req, res){
    res.send('Got a DELETE request at /user')
})
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})
