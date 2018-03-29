var express = require('express');
var router = express.Router();
var Order = require('../models/orderm');
router.post('/', function(req, res, next) {
    Order.deleteAll(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
//abc
module.exports = router;