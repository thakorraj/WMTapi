var express = require('express');
var router = express.Router();
var hotel = require('../models/hotelm');
var multer = require('multer');
var path = require('path');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/hotel')
    },
    filename: (req, file, cb) => {
        x = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
var upload = multer({ storage: storage });


router.put('/', upload.single('image'), function (req, res, next) {
    console.log(req.file.filename);
    hotel.updateHotelImg(req.body, req.file.filename, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;