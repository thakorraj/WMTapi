var express = require('express');
var router = express.Router();
var User = require('../models/userm');
router.post('/', function(req, res, next) {
    User.deleteAll(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});
module.exports = router;