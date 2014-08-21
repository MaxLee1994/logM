/**
 * @fileOverview send mail method
 *               from max@vzhibo.tv
 * @author Max
 * created at Tue Aug 19 2014 11:47:31 GMT+0800 (CST)
 */

var mail = require('nodemailer');
var mailList = require('./mail-list');

var mailQueue = {};
var MAIL_INTERVAL = 30 * 60 * 1000;

var transporter = mail.createTransport({
    host: mailList.FROM_HOST,
    port: mailList.FROM_PORT,
    auth: {
        user: mailList.FROM,
        pass: mailList.FROM_PWD
    },
    secure: true
})


var send = function(obj, noQueue) {
    
    // add to queue
    var obj = {
        to: to,
        subject: subject,
        content: content,
        success: success,
        error: error
    };
    if(noQueue) {
        sendMail(obj);
    } else if(mailQueue[subject] == undefined) {      
        sendMail(obj);
    } else {
        var timeDiff = new Date().valueOf() - mailQueue[subject].timestamp;
        if(timeDiff > MAIL_INTERVAL) {
            sendMail(obj);
        }
    }
    
    refreshMailQueueObj(subject, obj);
}
// refresh mailQueue obj 
function refreshMailQueueObj(subject, obj) {
    if(mailQueue[subject] == undefined) {
        mailQueue[subject] = {};
    }
    
    mailQueue[subject].to = obj.to;
    mailQueue[subject].subject = obj.subject;
    mailQueue[subject].content = obj.content;
    mailQueue[subject].success = obj.success;
    mailQueue[subject].error = obj.error;
    mailQueue[subject].timestamp = new Date().valueOf();
}

// send mail
function sendMail(obj) {
    transporter.sendMail({
        from: mailList.FROM,
        to: obj.to,
        subject: obj.subject,
        text: obj.content
    }, function(err) {
        if(!err) {
            console.log('mail to ' + obj.to + ', subject is ' + obj.subject + ' success!');
            if(obj.success) obj.success();
        } else {
            console.log('mail to ' + obj.to + ', subject is ' + obj.subject + ' fail!');
            console.error(err);
            if(obj.error) obj.error(err);
        }
    })
}

exports.send = send;
