var express = require('express');
var router = express.Router();
var Traveller = require('../models/travellerm');

router.get('/:id', function(req, res, next) {
    Traveller.getTravellerByDriver(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;