var db=require('../dbconnection');

var driver={
    getAllDriver:function(callback)
    {
        return db.query("select * from driver_tbl",callback);
    },
    getDriverById: function(id, callback) {
        return db.query("select * from driver_tbl where driver_id=?", [id], callback);
    },

    addDriver:function(Driver,callback)
    {
     //   return db.query("insert into car_tbl values(car_name=?,?,?,?,?,?,?,?)",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
     return db.query("insert into driver_tbl(driver_name,driver_license_no,Mobile_no,fk_traveller_id,driver_status) values(?,?,?,?,?)",[Driver.driver_name,Driver.driver_license_no,Driver.Mobile_no,Driver.fk_traveller_id,Driver.driver_status],callback);
     //  return db.query("insert into car_tbl Car.car_name=?,Car.car_color=?,Car.car_type=?,Car.car_img=?,Car.car_rate=?,Car.car_details=?,Car.car_category=?,Car.fk_traveller_id=?",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
    },

    deleteDriver:function(id,callback)
    {
        return db.query("delete from driver_tbl where driver_id=?",id,callback);
    },

    updateDriver:function(id,Driver,callback)
    {
        return db.query("update driver_tbl set driver_name=?,driver_license_no=?,Mobile_no=?,driver_status=? where driver_id=?",[Driver.driver_name,Driver.driver_license_no,Driver.Mobile_no,Driver.driver_status,id],callback);
    },

    updateDriverStatus(id,callback)
    {
        return db.query("UPDATE driver_tbl set driver_status=0 where driver_id=?",[id],callback);
    },

    driverbyid:function(id,callback)
    {
        return db.query("select * from traveller_tbl t,driver_tbl d where d.fk_traveller_id=t.traveller_id and t.traveller_email=?",[id],callback);
    },

    deleteAll: function(item, callback) {
        
                var delarr = [];
                for (i = 0; i < item.length; i++) {
        
                    delarr[i] = item[i].hotel_id;
                }
                return db.query("delete from driver_tbl where driver_id in (?)", [delarr], callback);
            }

};
module.exports=driver;