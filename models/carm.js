var db = require('../dbconnection');
var fs = require('fs');
var car = {
    getAllCar: function(callback) {
        return db.query("select * from car_tbl", callback);
    },

    addCar: function(Car,filename,callback) {
      /*  var dt = new Date();
        var x = dt.getDate() + "/";
        x += (dt.getMonth() + 1) + "/";
        x += dt.getFullYear();
        var y = dt.getHours() + ":";
        y += dt.getMinutes();
        var text = "";
        var text1 = ""; //random text
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        if (Car.car_img != '') {
            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            var pos = Car.car_img.indexOf(",");
            var base64d = Car.car_img.substring(pos + 1);
            // var base64d=Student.student_img.replace(/^data:image\/png;base64,/, "");
            var path = "../public/images/car/car_img" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
            var path1 = "/images/car/car_img" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
            fs.writeFile(path, base64d, 'base64', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");

            });*/
            //   return db.query("insert into car_tbl values(car_name=?,?,?,?,?,?,?,?)",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
            return db.query("insert into car_tbl(car_name,car_color,car_type,car_img,car_rate,car_details,car_category,fk_traveller_id) values(?,?,?,?,?,?,?,?)", [Car.car_name, Car.car_color, Car.car_type,filename, Car.car_rate, Car.car_details, Car.car_category, Car.fk_traveller_id], callback);
            //  return db.query("insert into car_tbl Car.car_name=?,Car.car_color=?,Car.car_type=?,Car.car_img=?,Car.car_rate=?,Car.car_details=?,Car.car_category=?,Car.fk_traveller_id=?",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
      //  }
    },

    deleteCar: function(id,callback) {
        return db.query("delete from car_tbl where car_id=?", id, callback);
    },

    updateCarImg: function (ps, filename, callback) {
        var post = db.query("select * from car_tbl where car_id=?", [ps.car_id]);
        post.on('result', function (row) {
            console.log(row.car_img);
            if (row.car_img != '') {
                var path = 'public/images/car/' + row.car_img;
                console.log(path);
                fs.unlink(path, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Deleted successfuly');
                });
            }
        });
        return db.query("update car_tbl set car_name=?,car_color=?,car_type=?,car_img=?,car_rate=?,car_details=?,car_category=?,fk_traveller_id=? where car_id=?", [ps.car_name, ps.car_color, ps.car_type, filename, ps.car_rate, ps.car_details, ps.car_category, ps.fk_traveller_id, ps.car_id], callback);
    },

    updateCar: function(id,Car,callback) {
        return db.query("update car_tbl set car_name=?,car_color=?,car_type=?,car_rate=?,car_details=?,car_category=?,fk_traveller_id=? where car_id=?", [Car.car_name, Car.car_color, Car.car_type, Car.car_rate, Car.car_details, Car.car_category, Car.fk_traveller_id, id], callback);
    },

    carbyid: function(id,callback) {
        return db.query("select * from traveller_tbl t,car_tbl c where c.fk_traveller_id=t.traveller_id and t.traveller_email=?", [id], callback);
    },

    getCarById: function(id,callback) {
        return db.query("select * from car_tbl where car_id=?", [id], callback);
    },

    getCarList: function(callback) {
        return db.query("select distinct car_name,car_img from car_tbl", callback);
    },

    getCarRate: function(Car,callback) {
        return db.query("SELECT * FROM `car_tbl` WHERE car_name=? and fk_traveller_id=?", [Car.car_name, Car.fk_traveller_id], callback);
    },

    deleteAll: function(item, callback) {
        
                var delarr = [];
                for (i = 0; i < item.length; i++) {
        
                    delarr[i] = item[i].car_id;
                }
                return db.query("delete from car_tbl where car_id IN (?)", [delarr], callback);
            },

};
module.exports = car;