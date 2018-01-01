var email = require("emailjs/email");
var demo = {

    sendMail: function(demo, callback) {

        var server = email.server.connect({
            user: "wishmytrip3@gmail.com",
            password: "wish1234",
            host: "smtp.gmail.com",
            ssl: true,
            port: 465
        });

        server.send({
            text: demo.message,
            from: "wishmytrip3@gmail.com",
            to: demo.name,
            subject: demo.subject
        }, callback);
    }


}
module.exports = demo;