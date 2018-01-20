var db = require('../dbconnection');

var traveller = {
    getAllTraveller: function(callback) {
        return db.query("select * from traveller_tbl", callback);
    },

    getTravellerById: function(id, callback) {
        return db.query("select * from traveller_tbl where traveller_id=?", [id], callback);
    },
    addTraveller: function(Traveller, callback) {
        //   return db.query("insert into car_tbl values(car_name=?,?,?,?,?,?,?,?)",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
        return db.query("insert into traveller_tbl(traveller_name,traveller_email,traveller_password,traveller_address,traveller_img,city) values(?,?,?,?,?,?)", [Traveller.traveller_name, Traveller.traveller_email, Traveller.traveller_password, Traveller.traveller_address, Traveller.traveller_img, Traveller.city], callback);
        //  return db.query("insert into car_tbl Car.car_name=?,Car.car_color=?,Car.car_type=?,Car.car_img=?,Car.car_rate=?,Car.car_details=?,Car.car_category=?,Car.fk_traveller_id=?",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
    },

    deleteTraveller: function(id, callback) {
        return db.query("delete from traveller_tbl where traveller_id=?", id, callback);
    },

    updateTraveller: function(id, Traveller, callback) {
        return db.query("update traveller_tbl set traveller_name=?,traveller_address=?,traveller_img=?,city=? where traveller_id=?", [Traveller.traveller_name, Traveller.traveller_address, Traveller.traveller_img, Traveller.city, id], callback);
    },
    deleteAll: function(item, callback) {

        var delarr = [];
        for (i = 0; i < item.length; i++) {

            delarr[i] = item[i].traveller_id;
        }
        return db.query("delete from traveller_tbl where traveller_id in (?)", [delarr], callback);
    },

    traveller_login:function(login,callback)
    {
        return db.query("select * from traveller_tbl where traveller_email=? and traveller_password=?",[login.traveller_email,login.traveller_password],callback);
    },

    getTravellerByEmail: function(id, callback) {
        return db.query("select * from traveller_tbl where traveller_email=?", [id], callback);
    },

    changePassword:function(id,Traveller,callback)
    {
        return db.query("update traveller_tbl set traveller_password=? where traveller_email=?",[Traveller.traveller_password,id],callback);
    },

    getTrvellerByCar:function(id,callback)
    {
        return db.query("select * from car_tbl c,traveller_tbl t where t.traveller_id=c.fk_traveller_id and c.car_name=?",[id],callback);
    }
};
module.exports = traveller;