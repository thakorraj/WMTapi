var express = require('express');
var router = express.Router();
var Order=require('../models/orderm');

router.get('/',function(req,res,next){
    Order.orderJoin(function(err,rows){
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
    Order.orderByTraveller(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    Order.deleteOrder(req.params.id,function(err,count){
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

router.put('/:id',function(req,res,next){
    Order.updateOrder(req.params.id,req.body,function(err,rows){
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
