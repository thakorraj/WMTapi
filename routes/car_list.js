var express = require('express');
var router = express.Router();
var Car=require('../models/carm');

router.get('/',function(req,res,next){
    Car.getCarList(function(err,rows){
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