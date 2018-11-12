var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//connect to mongoDB
var mongoose = require('mongoose');
var mongoDB = 'mongodb://CarUser:cardb1@ds125263.mlab.com:25263/car-db';
mongoose.connect(mongoDB);

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
    fuel: String
})

var PostModel = mongoose.model('cars', carSchema);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

//return JSON data when requested 
app.get('/posts', function (req, res) {

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
app.post('/posts', function (req, res) {
    console.log("Name = " + req.body.name);
    console.log("Password = " + req.body.password);
    console.log("phone = " + req.body.phone);
    console.log("email = " + req.body.email);
    console.log("Make = " + req.body.make);
    console.log("Model = " + req.body.model);
    console.log("Year = " + req.body.year);
    console.log("Price = " + req.body.price);
    console.log("Colour = " + req.body.colour);
    console.log("Fuel  = " + req.body.fuel);

    //mongo post
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
        fuel: req.body.fuel
    })

    res.send("Car added Successfully");
})

app.delete('/posts/:id', function(req,res){
    console.log(req.params.id);
    PostModel.deleteOne({ _id: req.params.id },
    function (err,data) {
        if(err)
            res.send(err);
        res.send(data);
    });
});



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})