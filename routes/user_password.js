var express = require('express');
var router = express.Router();
var UPassword=require('../models/userm');

router.put('/:id', function(req, res, next) {
    UPassword.changePassword(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=router;