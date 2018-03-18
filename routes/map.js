var express = require('express');
var router = express.Router();


router.get('/:x&:y', function(req, res, next) {
    var distance = require('google-distance');
    var x = req.params.x;
    var y = req.params.y;


    distance.get({
            origin: x,
            destination: y
        },
        function(err, data) {
            if (err) return console.log(err);
            console.log(data);
            res.json(data);

        });
});
module.exports = router;