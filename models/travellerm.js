var db=require('../dbconnection');

var traveller={
    getAllTraveller:function(callback)
    {
        return db.query("select * from traveller_tbl",callback);
    },

    addTraveller:function(Traveller,callback)
    {
     //   return db.query("insert into car_tbl values(car_name=?,?,?,?,?,?,?,?)",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
     return db.query("insert into traveller_tbl(traveller_name,traveller_email,traveller_password,traveller_address,traveller_img,city) values(?,?,?,?,?,?)",[Traveller.traveller_name,Traveller.traveller_email,Traveller.traveller_password,Traveller.traveller_address,Traveller.traveller_img,Traveller.city],callback);
     //  return db.query("insert into car_tbl Car.car_name=?,Car.car_color=?,Car.car_type=?,Car.car_img=?,Car.car_rate=?,Car.car_details=?,Car.car_category=?,Car.fk_traveller_id=?",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
    },

    deleteTraveller:function(id,callback)
    {
        return db.query("delete from traveller_tbl where traveller_id=?",id,callback);
    },

    updateTraveller:function(id,Traveller,callback)
    {
        return db.query("update traveller_tbl set traveller_name=?,traveller_email=?,traveller_password=?,traveller_address=?,traveller_img=?,city=? where traveller_id=?",[Traveller.traveller_name,Traveller.traveller_email,Traveller.traveller_password,Traveller.traveller_address,Traveller.traveller_img,Traveller.city,id],callback);
    }
};
module.exports=traveller;