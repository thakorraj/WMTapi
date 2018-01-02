var express = require('express');
var router = express.Router();
var Traveller = require('../models/travellerm');
router.post('/', function(req, res, next) {
    Traveller.deleteAll(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
module.exports = router;