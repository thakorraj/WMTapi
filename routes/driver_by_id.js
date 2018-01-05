var express = require('express');
var router = express.Router();
var Driver=require('../models/driverm');

router.get('/',function(req,res,next){
    Driver.getAllDriver(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
router.get('/:id', function(req, res, next) {
    Driver.driverbyid(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports=router;

