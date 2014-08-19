/**
 * @fileOverview send mail method
 *               from max@vzhibo.tv
 * @author Max
 * created at Tue Aug 19 2014 11:47:31 GMT+0800 (CST)
 */

var mail = require('nodemailer');

var transporter = mail.createTransport({
    host: 'smtp.exmail.qq.com',
    port: 465,
    auth: {
        user: 'max@vzhibo.tv',
        pass: 'wxzswbhddf15gb'
    },
    secure: true
})


var send = function(to, subject, content, success, error) {
    transporter.sendMail({
        from: 'max@vzhibo.tv',
        to: to,
        subject: subject,
        text: content
    }, function(err) {
        if(!err) {
            if(success) success();
        } else {
            if(error) error(err);
        }
    })
}

exports.send = send;
