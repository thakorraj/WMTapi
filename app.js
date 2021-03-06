var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');

var index = require('./routes/index');

var car = require('./routes/car');
var driver = require('./routes/driver');
var traveller = require('./routes/traveller');
var users = require('./routes/user');
var login = require('./routes/login');
var hotel = require('./routes/hotel');
var foremail = require('./routes/emailr');
var user_delall = require('./routes/user_deleteall');
var trav_delall = require('./routes/traveller_deleteall');
var hotel_delall = require('./routes/hotel_deleteall');
var car_deleteall = require('./routes/car_deleteall');
var traveller_login = require('./routes/traveller_login');
var traveller_email = require('./routes/traveller_email_id');
var driveremail = require('./routes/driver_by_id');
var driverall = require('./routes/driver_deleteall');
var caremail = require('./routes/car_by_id');
var travellerpassword = require('./routes/traveller_password');
var car_list = require('./routes/car_list');
var traveller_list = require('./routes/traveller_by_car');
var order = require('./routes/order');
var map = require('./routes/map');
var orderbill=require('./routes/orderr');
var user_email=require('./routes/user_email_id');
var userpassword = require('./routes/user_password');
var userorder=require('./routes/order_by_user');
var travellerorder=require('./routes/order_by_travller');
var orderall = require('./routes/order_deleteall');
var orderid=require('./routes/order_by_id');
var hotelcity=require('./routes/hotel_by_city');
var hotelimgu=require('./routes/update_hotelimg');
var userimgu=require('./routes/update_userimg');
var travellerimgu=require('./routes/update_travellerimg');
var carimgu=require('./routes/update_carimg');
var carstatus=require('./routes/carstatus_update');
var driverstatus=require('./routes/driverstatus_update');
var travellerdriver=require('./routes/traveller_by_driver');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/cars', car);
app.use('/drivers', driver);
app.use('/travellers', traveller);
app.use('/users', users);
app.use('/login', login);
app.use('/hotel', hotel);
app.use('/email', foremail);
app.use('/deletealltrav', trav_delall);
app.use('/deletalluser', user_delall);
app.use('/deletehotels', hotel_delall);
app.use('/traveller_login', traveller_login);
app.use('/temail', traveller_email);
app.use('/driveremail', driveremail);
app.use('/driverall', driverall);
app.use('/caremail', caremail);
app.use('/travellerpassword', travellerpassword);
app.use('/carlist', car_list);
app.use('/travellerlist', traveller_list);
app.use('/order', order);
app.use('/car_deleteall', car_deleteall);
app.use('/maps', map);
app.use('/orderbill',orderbill);
app.use('/uemail',user_email);
app.use('/userpassword',userpassword);
app.use('/userorder',userorder);
app.use('/travellerorder',travellerorder);
app.use('/orderdeleteall',orderall);
app.use('/orderid',orderid);
app.use('/hotelcity',hotelcity);
app.use('/hotelimgu',hotelimgu);
app.use('/userimgu',userimgu);
app.use('/travellerimgu',travellerimgu);
app.use('/carimgu',carimgu);
app.use('/carstatus',carstatus);
app.use('/driverstatus',driverstatus);
app.use('/travellerdriver',travellerdriver);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;