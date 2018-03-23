var express = require('express');
var router = express.Router();
var User1=require('../models/userm');

router.get('/',function(req,res,next){
    User1.getAllUser(function(err,rows){
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
    User1.getUserById(req.params.id,function(err,rows){
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