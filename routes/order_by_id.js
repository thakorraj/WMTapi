var express = require('express');
var router = express.Router();
var Order=require('../models/orderm');

router.get('/',function(req,res,next){
    Order.getAllOrder(function(err,rows){
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
    Order.getOrderById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports=router;
