var express = require('express');
var router = express.Router();
var Traveller1=require('../models/travellerm');

router.get('/',function(req,res,next){
    Traveller1.getAllTraveller(function(err,rows){
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

router.get('/:id',function(req,res,next){
    Traveller1.getTravellerByEmail(req.params.id,function(err,rows){
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