var db = require('../dbconnection');
var fs = require('fs');

var user = {
    getAllUser: function(callback) {
        return db.query("select * from user_tbl", callback);
    },
    getUserById: function(id, callback) {
        return db.query("select * from user_tbl where user_email_id=?", [id], callback);
    },
    user_count: function(callback) {
        return db.query("select count(*) from user_tbl");
    },
    addUser: function(User,filename, callback) {

 /*       var dt = new Date();
        var x = dt.getDate() + "/";
        x += (dt.getMonth() + 1) + "/";
        x += dt.getFullYear();
        var y = dt.getHours() + ":";
        y += dt.getMinutes();
        var text = "";
        var text1 = ""; //random text
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        if (User.user_photo != '') {
            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            var pos = User.user_photo.indexOf(",");
            var base64d = User.user_photo.substring(pos + 1);
            // var base64d=Student.student_img.replace(/^data:image\/png;base64,/, "");
            var path = "./public/images/user/user_photo" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
            var path1 = "/images/user/user_photo" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
            fs.writeFile(path, base64d, 'base64', function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");

            });*/

        //   return db.query("insert into car_tbl values(car_name=?,?,?,?,?,?,?,?)",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
        //return db.query("insert into user_tbl(user_email_id,user_password,user_name,user_address,user_DO_B,user_gender,user_photo,user_mobile_no,user_type) values(?,?,?,?,?,?,?,?,'admin')", [User.user_email_id, User.user_password, User.user_name, User.user_address, User.user_DO_B, User.user_gender, path1, User.user_mobile_no], callback);
        return db.query("insert into user_tbl(user_email_id,user_password,user_name,user_address,user_DO_B,user_gender,user_photo,user_mobile_no,user_type) values(?,?,?,?,?,?,?,?,'admin')", [User.user_email_id, User.user_password, User.user_name, User.user_address, User.user_DO_B, User.user_gender, filename, User.user_mobile_no], callback);
        //  return db.query("insert into car_tbl Car.car_name=?,Car.car_color=?,Car.car_type=?,Car.car_img=?,Car.car_rate=?,Car.car_details=?,Car.car_category=?,Car.fk_traveller_id=?",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
    //    }
    },

    deleteUser: function(id, callback) {
        return db.query("delete from user_tbl where user_email_id=?", id, callback);
    },

    updateUserImg: function (ps, filename, callback) {
        var post = db.query("select * from user_tbl where user_email_id=?", [ps.user_email_id]);
        post.on('result', function (row) {
            console.log(row.user_photo);
            if (row.user_photo != '') {
                var path = 'public/images/user/' + row.user_photo;
                console.log(path);
                fs.unlink(path, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Deleted successfuly');
                });
            }
        });
        return db.query("update user_tbl set user_name=?,user_address=?,user_DO_B=?,user_gender=?,user_photo=?,user_mobile_no=? where user_email_id=?", [ps.user_name, ps.user_address, ps.user_DO_B, ps.user_gender, filename, ps.user_mobile_no, ps.user_email_id], callback);
    },

    updateUser: function(id, User, callback) {
        return db.query("update user_tbl set user_name=?,user_address=?,user_DO_B=?,user_gender=?,user_mobile_no=? where user_email_id=?", [User.user_name, User.user_address, User.user_DO_B, User.user_gender, User.user_mobile_no, id], callback);
    },
    deleteAll: function(item, callback) {

        var delarr = [];
        for (i = 0; i < item.length; i++) {

            delarr[i] = item[i].user_email_id;
        }
        return db.query("delete from user_tbl where user_email_id IN (?)", [delarr], callback);
    },

    changePassword:function(id,User,callback)
    {
        return db.query("update user_tbl set user_password=? where user_email_id=?",[User.user_password,id],callback);
    },
};
module.exports = user