var express = require('express');
var router = express.Router();
var hotel=require('../models/hotelm');
var multer = require('multer');
var path = require('path');


router.get('/',function(req,res,next){
    hotel.getAllHotels(function(err,rows){
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
    hotel.getHotelById(req.params.id,function(err,rows){
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
      cb(null, 'public/images/hotel')
    },
    filename: (req, file, cb) => {
      x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage});

router.post('/',upload.single('image'),function(req,res,next){
    hotel.addHotel(req.body,req.file.filename,function(err,count){
        
                if(err)
                {
                    res.json(err);
                }
                else
                {
                    res.json(req.body);//or return count for 1 or 0
                }
            });
        });

router.delete('/:id',function(req,res,next){
    hotel.deleteHotel(req.params.id,function(err,count){
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
    hotel.updateHotel(req.params.id,req.body,function(err,rows){
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