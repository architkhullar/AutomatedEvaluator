var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Survey = require('./api/models/SurveyModel'),
    User = require('./api/models/UserModel'),
    // Patient = require('./api/models/PatientModel'),
    jsonwebtoken = require("jsonwebtoken");
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://archit:archit@cluster0-axmyu.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
var db = mongoose.connection;

app.use(express.static('images')); //Serves resources from public folder

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/ApplicationRoutes'); //importing route
routes(app); //register the route



app.listen(port);

console.log('Final Project API started: ' + port);
