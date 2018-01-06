var express = require('express');
var router = express.Router();
var Password=require('../models/travellerm');

router.put('/:id', function(req, res, next) {
    Password.changePassword(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=router;