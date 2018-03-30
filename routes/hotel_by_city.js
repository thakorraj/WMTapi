var express = require('express');
var router = express.Router();
var Hotel=require('../models/hotelm');

router.get('/',function(req,res,next){
    Hotel.getAllHotels(function(err,rows){
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
    Hotel.getHotelByCity(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports=router;
