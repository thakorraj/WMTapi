var express = require('express');
var router = express.Router();
var hotel = require('../models/hotelm');
router.post('/', function(req, res, next) {
    hotel.deleteAll(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
module.exports = router;