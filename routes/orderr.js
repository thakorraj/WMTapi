var express = require('express');
var router = express.Router();
var order=require('../models/orderm');
var multer = require('multer');
var path = require('path');


router.get('/',function(req,res,next){
    order.getAllOrder(function(err,rows){
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
    order.getOrderById(req.params.id,function(err,rows){
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



router.post('/',function(req,res,next){
    order.addOrder(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(req.body);
        }
    });
});

router.delete('/:id',function(req,res,next){
    order.deleteOrder(req.params.id,function(err,count){
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