var express = require('express');
var router = express.Router();
var Car=require('../models/carm');
var multer = require('multer');
var path = require('path');

router.put('/:id',function(req,res,next){
    Car.updateCarStatus(req.params.id,function(err,rows){
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

module.exports=router;