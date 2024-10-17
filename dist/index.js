//include all module which require global
fs = require("fs");
express = require('express');
bodyParser = require('body-parser');
path = require('path');
app = module.exports = express();
http = module.exports = require('http').Server(app);
request = module.exports = require('request');
mongoose = module.exports = require('mongoose');
mongoose.set('strictQuery', false);
multer = module.exports = require('multer');
_ = module.exports = require('underscore');
cors = module.exports = require("cors");
jwt = module.exports = require('jsonwebtoken');
md5 = module.exports = require('md5');
cookieParser = module.exports = require('cookie-parser');
pagination = module.exports = require('pagination');
validator = module.exports = require("email-validator");
nodemailer = module.exports = require('nodemailer');
moment=module.exports=require('moment')
require('dotenv').config()
nodemailer = module.exports = require('nodemailer');
// const { uploadFile } = require("./uploads3");

app.use(cors());


//include all module which require locally
var format = require('util').format;

//const CONFIG_NAME = process.env.CONFIG_NAME || 'config.json';
const PORT = process.env.PORT ;
console.log("PORT >> ", PORT);
app.use(cookieParser());

//set ejs in to html page 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
// app.set('public', path.join(__dirname, 'client'));
app.use(express.static(path.resolve(__dirname, 'client')));

//for set url 
app.use(express.static(path.join(__dirname, '/public'))); // Adjust the path as needed

app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// config = module.exports = JSON.parse(fs.readFileSync(CONFIG_NAME));
// config.document_root = __dirname;

// statesData = module.exports = JSON.parse(fs.readFileSync("./in.json"));
// pincodeData = module.exports = JSON.parse(fs.readFileSync("./pincode.json"));

http.listen(PORT);

mongoose.connect(process.env.MONGO_URL )
mongoose.pluralize(null);

console.log(process.env.MONGO_URL);

ObjectId = module.exports = mongoose.mongo.ObjectId;

//all url settings
require('./setting/url_setting.js');

//all controller settings
require('./setting/controllers_setting.js');