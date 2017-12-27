var db=require('../dbconnection');

var login={
    getAll:function(login,callback)
    {
        return db.query("select * from user_tbl where user_email_id=? and user_password=?",[login.user_email_id,login.user_password],callback);
    }
};
module.exports=login;
