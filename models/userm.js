var db=require('../dbconnection');

var user={
    getAllUser:function(callback)
    {
        return db.query("select * from user_tbl",callback);
    },

    addUser:function(User,callback)
    {
     //   return db.query("insert into car_tbl values(car_name=?,?,?,?,?,?,?,?)",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
     return db.query("insert into user_tbl(user_email_id,user_password,user_name,user_address,user_DO_B,user_gender,user_photo,user_mobile_no,user_type) values(?,?,?,?,?,?,?,?,'admin')",[User.user_email_id,User.user_password,User.user_name,User.user_address,User.user_DO_B,User.user_gender,User.user_photo,User.user_mobile_no],callback);
     //  return db.query("insert into car_tbl Car.car_name=?,Car.car_color=?,Car.car_type=?,Car.car_img=?,Car.car_rate=?,Car.car_details=?,Car.car_category=?,Car.fk_traveller_id=?",[Car.car_name,Car.car_color,Car.car_type,Car.car_img,Car.car_rate,Car.car_details,Car.car_category,Car.fk_traveller_id],callback);
    },

    deleteUser:function(id,callback)
    {
        return db.query("delete from user_tbl where user_email_id=?",id,callback);
    },

    updateUser:function(id,User,callback)
    {
        return db.query("update user_tbl set user_password=?,user_name=?,user_address=?,user_DO_B=?,user_gender=?,user_photo=?,user_mobile_no=? where user_email_id=?",[User.user_password,User.user_name,User.user_address,User.user_DO_B,User.user_gender,User.user_photo,User.user_mobile_no,id],callback);
    }
};
module.exports=user;