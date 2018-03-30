var db = require('../dbconnection');
var fs = require('fs');

var hotel = {
    getAllHotels: function (callback) {
        return db.query("select * from hotel_rating", callback);
    },
    getHotelById: function (id, callback) {
        return db.query("select * from hotel_rating where hotel_id=?", [id], callback);
    },

    getHotelByCity: function (id, callback) {
        return db.query("select * from hotel_rating where hotel_city=?", [id], callback);
    },

    addHotel: function (hotel, filename, callback) {

        /*    var dt = new Date();
            var x = dt.getDate() + "/";
            x += (dt.getMonth() + 1) + "/";
            x += dt.getFullYear();
            var y = dt.getHours() + ":";
            y += dt.getMinutes();
            var text = "";
            var text1 = ""; //random text
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            if (hotel.hotel_img != '') {
                for (var i = 0; i < 5; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                var pos = hotel.hotel_img.indexOf(",");
                var base64d = hotel.hotel_img.substring(pos + 1);
                // var base64d=Student.student_img.replace(/^data:image\/png;base64,/, "");
                var path = "./public/images/hotel/hotel_img" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
                var path1 = "/images/hotel/hotel_img" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
                fs.writeFile(path, base64d, 'base64', function(err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
    
                });*/

        return db.query("insert into hotel_rating(hotel_name,hotel_address,hotel_img,hotel_feedback,hotel_city,hotel_rating,hotel_description) values(?,?,?,?,?,?,?)", [hotel.hotel_name, hotel.hotel_address, filename, hotel.hotel_feedback, hotel.hotel_city, hotel.hotel_rating, hotel.hotel_description], callback);

        //}
    },

    deleteHotel: function (id, callback) {
        return db.query("delete from hotel_rating where hotel_id=?", id, callback);
    },

    updateHotelImg: function (ps, filename, callback) {
        var post = db.query("select * from hotel_rating where hotel_id=?", [ps.hotel_id]);
        post.on('result', function (row) {
            console.log(row.hotel_img);
            if (row.hotel_img != '') {
                var path = 'public/images/hotel/' + row.hotel_img;
                console.log(path);
                fs.unlink(path, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Deleted successfuly');
                });
            }
        });
        return db.query("update hotel_rating set hotel_name=?,hotel_address=?,hotel_img=?,hotel_feedback=?,hotel_city=?,hotel_rating=?,hotel_description=? where hotel_id=?", [ps.hotel_name, ps.hotel_address, filename, ps.hotel_feedback, ps.hotel_city, ps.hotel_rating, ps.hotel_description, ps.hotel_id], callback);
    },

    updateHotel: function (id, hotel, callback) {
        return db.query("update hotel_rating set hotel_name=?,hotel_address=?,hotel_feedback=?,hotel_city=?,hotel_rating=?,hotel_description=? where hotel_id=?", [hotel.hotel_name, hotel.hotel_address, hotel.hotel_feedback, hotel.hotel_city, hotel.hotel_rating, hotel.hotel_description, id], callback);
    },
    deleteAll: function (item, callback) {

        var delarr = [];
        for (i = 0; i < item.length; i++) {

            delarr[i] = item[i].hotel_id;
        }
        return db.query("delete from hotel_rating where hotel_id in (?)", [delarr], callback);
    },
};
module.exports = hotel;