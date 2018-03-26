var express = require('express');
var sampleRouter = express.Router();

sampleRouter.get('/', function (req, res) {
    res.json({})
});


module.exports = sampleRouter;
