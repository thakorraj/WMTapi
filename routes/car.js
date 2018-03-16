var express = require('express');
var router = express.Router();
var Car=require('../models/carm');
var multer = require('multer');
var path = require('path');

router.get('/',function(req,res,next){
    Car.getAllCar(function(err,rows){
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
    Car.getCarById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/car')
    },
    filename: (req, file, cb) => {
      x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage});

router.post('/',upload.single('image'),function(req,res,next){
    Car.addCar(req.body,req.file.filename,function(err,count){
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
    Car.deleteCar(req.params.id,function(err,count){
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
    Car.updateCar(req.params.id,req.body,function(err,rows){
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