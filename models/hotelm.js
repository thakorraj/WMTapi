var db=require('../dbconnection');

var hotel={
    getAllHotels:function(callback)
    {
        return db.query("select * from hotel_rating",callback);
    },

    addHotel:function(hotel,callback)
    {
     
     return db.query("insert into hotel_rating(hotel_name,hotel_address,hotel_img,hotel_feedback,hotel_city,hotel_rating,hotel_description) values(?,?,?,?,?,?,?)",[hotel.hotel_name,hotel.hotel_address,hotel.hotel_img,hotel.hotel_feedback,hotel.hotel_city,hotel.hotel_rating,hotel.hotel_description],callback);
     
    },

    deleteHotel:function(id,callback)
    {
        return db.query("delete from hotel_rating where hotel_id=?",id,callback);
    },

    updateHotel:function(id,hotel,callback)
    {
        return db.query("update hotel_rating set hotel_name=?,hotel_address=?,hotel_img=?,hotel_feedback=?,hotel_city=?,hotel_rating=?,hotel_description=? where hotel_id=?",[hotel.hotel_name,hotel.hotel_address,hotel.hotel_img,hotel.hotel_feedback,hotel.hotel_city,hotel.hotel_rating,hotel.hotel_description,id],callback);
    }
};
module.exports=hotel;