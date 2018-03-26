var express = require('express');
var router = express.Router();
var app = express();


/** IMPORT DEPENDENCIES */
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); // mongoose module

/** SETTINGS */
app.use(bodyParser.json()); // parse application/json
// set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
// get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// get the default connection
var db = mongoose.connection;
// bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, '[DATABASE] MongoDB connection error:'));


/** SERVE PUBLIC FILES */
app.use('/', express.static(__dirname + '/dist'));

/** API ENDPOINTS */
// import the API controllers
var sampleRouter = require('./server/routes/sampleRouter');
// register controllers for endpoints
router.use('/sample', sampleRouter);//Api for devices
// any route starting with '/api' will be interfacing our API
app.use('/api', router);


/** RUN APP */
var server = app.listen(process.env.PORT || '3000', function () {
    console.log('[SERVER] I\'m listening on PORT: ' + (process.env.PORT || '3000'));
});

module.exports = server;
