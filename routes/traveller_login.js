var express = require('express');
var router = express.Router();
var Login=require('../models/travellerm');

router.post('/',function(req,res,next){
    Login.traveller_login(req.body,function(err,count){
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