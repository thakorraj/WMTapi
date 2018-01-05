var express = require('express');
var router = express.Router();
var driver = require('../models/driverm');
router.post('/', function(req, res, next) {
    driver.deleteAll(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
module.exports = router;