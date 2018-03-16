var express = require('express');
var router = express.Router();
var multer = require('multer');
var User = require('../models/userm');
var path = require('path');

router.get('/', function(req, res, next) {
    User.getAllUser(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/:id', function(req, res, next) {
    User.getUserById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/user')
    },
    filename: (req, file, cb) => {
      x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage});

/*router.post('/', function(req, res, next) {
    User.addUser(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});*/

router.post('/', upload.single('image'), (req, res, next) => {
    
      // console.log(req.body);
      // console.log(req.file.filename);
  
        User.addUser(req.body,req.file.filename,function(err,count){
  
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

router.delete('/:id', function(req, res, next) {
    User.deleteUser(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:id', function(req, res, next) {
    User.updateUser(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
    router.get('/', function(req, res, next) {
        User.user_count(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    });
});

module.exports = router;