var express = require('express');
var app = express();

//使用字符串路径发送请求
app.get('/', function(req, res){
    res.send('root')
})

//匹配about路径的请求
app.get('/about', function(req, res){
    res.send('about')
})

//匹配random.text路径的请求
app.get('/random.text', function(req, res){
    res.send('random.text');
})

//字符串模式的路由路径示例
//?代表的是0-无穷
//+代表的是1-无穷
//*代表的是通配
//()代表一个整体
//匹配 abcd acd
app.get('/ab?cd', function(req, res){
    res.send('ab?cd')
})
//匹配 abcd abbcd abbbcd abbbbcd
app.get('/ab+cd', function(req, res){
    res.send('ab?cd')
})
//匹配abcd abxcd abhahacd
app.get('/ab*cd', function(req, res){
    res.send('ab?cd')
})
//匹配abe 和 abcde
app.get('/ab(cd)?e', function(req, res){
    res.send('ab?cd')
})
//匹配所有带a的路径
app.get(/a/, function(req, res){
    res.send('/a/')
})
//匹配所有以fly结尾的路径
app.get(/.*fly$/, function(req, res){
    res.send('/.*fly$/')
})
var server = app.listen(3000, function(){
    
})