var db = require('../dbconnection');
var fs = require('fs');
var order = {
    getAllOrder: function(callback) {
        return db.query("select * from order_tbl", callback);
    },

    getOrderById: function(id, callback) {
        return db.query("select * from order_tbl where order_id=?", [id], callback);
    },

    addOrder: function(Order,callback) {

        return db.query("insert into order_tbl(fk_user_id,source,destination,Booking_date,checking_date,checkout_date,amount,fk_car_id,fk_car_name,fk_driver_id,fk_traveller_id,booking_status) values(?,?,?,?,?,?,?,?,?,?,?,?)",[Order.fk_user_id,Order.source,Order.destination,Order.Booking_date,Order.checking_date,Order.checkout_date,Order.amount,Order.fk_car_id,Order.fk_car_name,Order.fk_driver_id,Order.fk_traveller_id,Order.booking_status],callback);
    },
    deleteOrder: function(id,callback) {
        return db.query("delete from order_tbl where order_id=?", id, callback);
    },

    orderByTraveller:function(id,callback)
    {
        return db.query("select * from order_tbl where fk_traveller_id=?", [id], callback);
    },

    orderByUser:function(id,callback)
    {
        return db.query("select * from order_tbl where fk_user_id=?", [id], callback);
    } ,

    orderJoin:function(callback)
    {
        return db.query("SELECT c.*,o.* from car_tbl c,order_tbl o WHERE c.car_id=o.fk_car_id",callback);
    },

    updateOrder: function(id,Order,callback) {
        return db.query("update order_tbl set fk_user_id=?,source=?,destination=?,Booking_date=?,checking_date=?,checkout_date=?,amount=?,fk_car_id=?,fk_car_name=?,fk_driver_id=?,fk_traveller_id=?,booking_status=? where order_id=?", [Order.fk_user_id,Order.source,Order.destination,Order.Booking_date,Order.checking_date,Order.checkout_date,Order.amount,Order.fk_car_id,Order.fk_car_name,Order.fk_driver_id,Order.fk_traveller_id,Order.booking_status,id], callback);
    },

    deleteAll: function(item,callback) {
        
                var delarr = [];
                for (i = 0; i < item.length; i++) {
        
                    delarr[i] = item[i].order_id;
                }
                return db.query("delete from order_tbl where order_id in (?)", [delarr], callback);
            },
        };
        module.exports = order;