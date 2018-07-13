var http = require('http');
var express = require('express');
var hbs = require('express-hbs');
var app = express();
app.set('view engine','hbs');
app.engine('hbs',hbs.express4({}));

app.listen(3000,function(){
	console.log('server is running');
});

var data = [
	{
    "_id":"1",
    "inStock": true,
    "brand": "samsung",
    "model": "s1",
    "price": 1500,
    "color": "black"
},{
    "_id":"2",
    "inStock": true,
    "brand": "samsung",
    "model": "s2",
    "price": 1500,
    "color": "black"
},{
    "_id":"3",
    "inStock": true,
    "brand": "samsung",
    "model": "s3",
    "price": 1600,
    "color": "black"
},{
    "_id":"4",
    "inStock": true,
    "brand": "samsung",
    "model": "s4",
    "price": 1700,
    "color": "black"
},{
    "_id":"5",
    "inStock": true,
    "brand": "samsung",
    "model": "s5",
    "price": 1800,
    "color": "black"
},{
    "_id":"6",
    "inStock": true,
    "brand": "samsung",
    "model": "s6",
    "price": 1900,
    "color": "black"
},{
    "_id":"7",
    "inStock": true,
    "brand": "samsung",
    "model": "s7",
    "price": 2000,
    "color": "black"
},{
    "_id":"8",
    "inStock": true,
    "brand": "samsung",
    "model": "s8",
    "price": 2000,
    "color": "black"
},{
    "_id":"9",
    "inStock": true,
    "brand": "samsung",
    "model": "s9",
    "price": 2000,
    "color": "black"
},{
    "_id":"10",
    "inStock": true,
    "brand": "samsung",
    "model": "s10",
    "price": 2000,
    "color": "black"
},

];

app.get('/',function(req,res){
	res.render('index',{tickets:data});
})