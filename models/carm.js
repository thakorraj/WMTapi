var db=require('../dbconnection');

var car={
    getAllCar:function(callback)
    {
        return db.query("select * from car_tbl",callback);
    },

    addCar:function(Car,callback)
    {
     //   return db.query("insert into car_tbl values(car_name=?,?,?,?,?,?,?,?)",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
     return db.query("insert into car_tbl(car_name,car_color,car_type,car_img,car_rate,car_details,car_category,fk_traveller_id) values(?,?,?,?,?,?,?,?)",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
     //  return db.query("insert into car_tbl Car.car_name=?,Car.car_color=?,Car.car_type=?,Car.car_img=?,Car.car_rate=?,Car.car_details=?,Car.car_category=?,Car.fk_traveller_id=?",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
    },

    deleteCar:function(id,callback)
    {
        return db.query("delete from car_tbl where car_id=?",id,callback);
    },

    updateCar:function(id,Car,callback)
    {
        return db.query("update car_tbl set car_name=?,car_color=?,car_type=?,car_img=?,car_rate=?,car_details=?,car_category=?,fk_traveller_id=? where car_id=?",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id,id],callback);
    },

    carbyid:function(id,callback)
    {
        return db.query("select * from traveller_tbl t,car_tbl c where c.fk_traveller_id=t.traveller_id and t.traveller_email=?",[id],callback);
    },

    getCarById: function(id, callback) {
        return db.query("select * from car_tbl where car_id=?", [id], callback);
    },
    
};
module.exports=car;