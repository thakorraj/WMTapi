var express = require('express');
var router = express.Router();
var Car=require('../models/carm');

router.post('/',function(req,res,next){
    Car.getCarRate(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(count);
        }
    });
});


module.exports=router;