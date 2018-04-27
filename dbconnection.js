var mysql = require('mysql');
/* var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'WMT'
}); */

var connection = mysql.createPool({
    host: 'wishmytrip.db.9462939.e8f.hostedresource.net',
    user: 'wishmytrip',
    password: 'Raj@1212',
    database: 'wishmytrip'
});
module.exports = connection;