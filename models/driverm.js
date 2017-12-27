var db=require('../dbconnection');

var driver={
    getAllDriver:function(callback)
    {
        return db.query("select * from driver_tbl",callback);
    },

    addDriver:function(Driver,callback)
    {
     //   return db.query("insert into car_tbl values(car_name=?,?,?,?,?,?,?,?)",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
     return db.query("insert into driver_tbl(driver_name,driver_license_no,fk_traveller_id) values(?,?,?)",[Driver.driver_name,Driver.driver_license_no,Driver.fk_traveller_id],callback);
     //  return db.query("insert into car_tbl Car.car_name=?,Car.car_color=?,Car.car_type=?,Car.car_img=?,Car.car_rate=?,Car.car_details=?,Car.car_category=?,Car.fk_traveller_id=?",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
    },

    deleteDriver:function(id,callback)
    {
        return db.query("delete from driver_tbl where driver_id=?",id,callback);
    },

    updateDriver:function(id,Driver,callback)
    {
        return db.query("update driver_tbl set driver_name=?,driver_license_no=?,fk_traveller_id=? where driver_id=?",[Driver.driver_name,Driver.driver_license_no,Driver.fk_traveller_id,id],callback);
    }
};
module.exports=driver;