var express = require('express');
var router = express.Router();
var multer = require('multer');
var Traveller=require('../models/travellerm');
var path = require('path');

router.get('/',function(req,res,next){
    Traveller.getAllTraveller(function(err,rows){
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
    Traveller.getTravellerById(req.params.id,function(err,rows){
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

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/traveller')
    },
    filename: (req, file, cb) => {
      x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage});

router.post('/',upload.single('image'),function(req,res,next){
  //  Traveller.addTraveller(req.body,function(err,count){

    Traveller.addTraveller(req.body,req.file.filename,function(err,count){
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
    Traveller.deleteTraveller(req.params.id,function(err,count){
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
    Traveller.updateTraveller(req.params.id,req.body,function(err,rows){
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