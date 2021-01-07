const express = require('express');
const Productdata = require('./src/model/Productdata');
const Authordata = require('./src/model/Authordata');
const cors = require('cors');
const jwt=require('jsonwebtoken');
var bodyparser = require('body-parser');
var app = new express();

var ObjectId = require('mongoose').Types.ObjectId;
const { request } = require('express');

app.use(cors());
app.use(bodyparser.json());
username="admin"
password="1234"

function verifyToken(req,res,nxt){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token=req.headers.authorization.split('')[1]
    if(token=='null')
    {
       return res.status(401).send('Unauthorized request')
    }
    let payload=jwt.verify(token,'secretKey')
    console.log(payload)
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId=payload.subject
    next()

}

app.post('/login',(req,res)=>{
    let userData = req.body
    if(!username)
    {
        res.status(401).send('Invalid Username')
    }
    else
    if(password !== userData.password){
        res.status(401).send('Invalid Password')
    }
    else{
        let payload={subject:username+password}
        let token=jwt.sign(payload,'secretKey')
        res.status(200).send({token})
    }
})

app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    Productdata.find()
            .then(function(products){
                res.send(products);
            });
});








app.post('/insert',verifyToken,function(req,res){
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log('insert')
    console.log(req.body);
    var product = {
        bookID : req.body.product.bookID,
        book : req.body.product.book,
        author : req.body.product.author,
        genre : req.body.product.genre,
        imageUrl : req.body.product.imageUrl
    }
    var product = new Productdata(product);
    product.save();
});

app.put('/update/:id',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log("HI"+req.body.product._id);
    // const id = ObjectId(req.body.product._id);
    const id = req.params.id;

    console.log(id);
    var product = {
        // _id: req.body.product._id,

        bookID : req.body.product.bookID,
        book : req.body.product.book,
        author : req.body.product.author,
        genre : req.body.product.genre,
        imageUrl : req.body.product.imageUrl
    }
    console.log(product);

    Productdata.findOneAndUpdate({ _id: id }, product ,{ new: true},(err,doc)=>{
        if(!err){
            console.log(doc);
        }
        else{
            console.log(err);
        }
    });

});

app.delete('/delete/:id',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log("hi");
    const id = req.params.id;
    console.log(id);
    Productdata.findOneAndDelete({_id:id},(err,doc)=>{
        if(!err){
            console.log("Author deleted"+doc);
        }
        else{
            console.log(err);
        }
});
});

// AUTHOR
app.get('/authors',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    Authordata.find()
            .then(function(authors){
                res.send(authors);
            });
});

app.post('/insertadd',verifyToken,function(req,res){
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log('insert')
    console.log(req.body);
    var author = {
        authorID : req.body.author.authorID,
        authorname : req.body.author.authorname,
        genre : req.body.author.genre,
        imageUrl : req.body.author.imageUrl
    }
    var author = new Authordata(author);
    author.save();
});

app.put('/updateauthor/:id',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log("HI"+req.body.author._id);
    // const id = ObjectId(req.body.product._id);
    const id = req.params.id;

    console.log(id);
    var author = {
        // _id: req.body.product._id,

        authorID : req.body.author.authorID,
        authorname : req.body.author.authorname,
        genre : req.body.author.genre,
        // description : req.body.product.description,
        // price : req.body.product.price,
        // starRating : req.body.product.starRating,
        imageUrl : req.body.author.imageUrl
    }
    console.log(author);

    Authordata.findOneAndUpdate({ _id: id }, author ,{ new: true},(err,doc)=>{
        if(!err){
            console.log(doc);
        }
        else{
            console.log(err);
        }
    });

});

app.delete('/deleteauthor/:id',(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log("hi");
    const id = req.params.id;
    console.log(id);
    Authordata.findOneAndDelete({_id:id},(err,doc)=>{
        if(!err){
            console.log("Author deleted"+doc);
        }
        else{
            console.log(err);
        }
});
});





app.listen(3000,function(){
    console.log("Listening to port 3000");
});