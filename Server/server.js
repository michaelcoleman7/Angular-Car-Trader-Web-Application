var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://CarUser:cardb1@ds125263.mlab.com:25263/car-db'; //connect to mlab with username,password and database
mongoose.connect(mongoDB);
//create schema
var Schema = mongoose.Schema;
var carSchema = new Schema({
    name: String,
    password: String,
    phone: Number,
    email: String,
    make : String,
    model : String,
    year: Number,
    price: Number,
    colour: String,
    fuel: String,
    photo: String
})
//create postmodel
var PostModel = mongoose.model('cars', carSchema);

//headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

//return JSON data when requested 
app.get('/getallcars', function (req, res) {
    PostModel.find(function(err, data){
        if (err){
            res.send(err);
        }
        res.json(data);
    });
})

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//Post Json to mongoDB
app.post('/postcar', function (req, res) {

    //create post and send to mongoDB
    PostModel.create({
        name: req.body.name,
        password: req.body.password,
        phone: req.body.phone,
        email: req.body.email,
        make:req.body.make,
        model:req.body.model,
        year: req.body.year,
        price: req.body.price,
        colour: req.body.colour,
        fuel: req.body.fuel,
        photo: req.body.photo
    },function (err) {
        if(err)
            res.send(err);
    })
    res.send("Car added Successfully");
})

//delete car using id from MongoDB
app.delete('/deletecar/:id', function(req,res){
    console.log(req.params.id);
    PostModel.deleteOne({ _id: req.params.id },
    function (err,data) {
        if(err)
            res.send(err);
        res.send(data);
    });
});

//get car by id from MondoDB
app.get('/getcars/:id', function(req,res){
        PostModel.findById(req.params.id,
            function(req,data){
                res.json(data);
        });
});

//Update car by id with new information recieved from user
app.put('/getcars/:id', function(req,res){
    PostModel.findByIdAndUpdate(req.params.id, req.body, 
        function(err, data){
            if(err)
             res.send(err);
            res.send(data);
        })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})