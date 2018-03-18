var express = require('express');
var router = express.Router();
var car = require('../models/carm');
router.post('/', function(req, res, next) {
    car.deleteAll(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
//abc
module.exports = router;