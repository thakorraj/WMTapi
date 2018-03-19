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

        return db.query("insert into order_tbl(fk_user_id,source,destination,Booking_date,checking_date,checkout_date,fk_car_id,fk_driver_id,fk_traveller_id,booking_status) values(?,?,?,?,?,?,?,?,?,?)",[Order.fk_user_id,Order.source,Order.destination,Order.Booking_date,Order.checking_date,Order.checkout_date,Order.fk_car_id,Order.fk_driver_id,Order.fk_traveller_id,Order.booking_status],callback);
    },
    deleteOrder: function(id,callback) {
        return db.query("delete from order_tbl where order_id=?", id, callback);
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