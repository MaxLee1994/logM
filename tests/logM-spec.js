/**
 * @fileOverview logM unit test
 * @author Max
 * created at Tue Aug 19 2014 15:14:02 GMT+0800 (CST)
 */

var divider = require('./test-unit-divider');

divider.start('logger console effect');
    
    var logger = require('../src/logger').create('test');
    logger.log('this is a log', 'and second argument', 'and third argument');
    logger.debug('this is a debug', 'and second argument');
    logger.warn('this is a warn', 'and second argument');
    logger.error('this is a error', 'and second argument');
    logger.trace('this is a trace', 'and second argument');

divider.end();



//divider.start('mail test');
//
//    var mail = require('../src/mail');
//    
//    mail.send('max@vzhibo.tv',
//              'test mail 1',
//              '我爱刘花花');
//    mail.send('max@vzhibo.tv',
//              'test mail 1',
//              '我爱刘花花');
//    var action = function() {
//        mail.send('max@vzhibo.tv',
//              'test mail 1',
//              '我爱刘花花');
//    }
//    setTimeout(action, 2000);
//    
//    mail.send('max@vzhibo.tv',
//              'test mail 2',
//              '我草刘花花');
//
//divider.end();


//divider.start('file-appender write to file');
//
//    var fileAppender = require('../src/file-appender').create('log/', 'test');
//    
//    for(var i = 0; i < 1000; i++) {
//        fileAppender.appendToFile('this is the ' + i + ' log');
//    }
//
//    var count = 1000;
//    var action = function() {
//        fileAppender.appendToFile('this is the ' + count + ' log');
//        count++;
//    }
//    setInterval(action, 1000);
//
//divider.end();

//divider.start('logger notifyMaintainer');
//
//    var logger = require('../src/logger').create('test');
//    logger.notifyMaintainer('max@vzhibo.tv', 'this is a test mail', 'momoda');
//    logger.notifyMaintainer('max@vzhibo.tv', 'this is a test mail', 'momoda');
//    logger.notifyMaintainer('max@vzhibo.tv', 'this is a test mail', 'momoda', true);
//
//divider.end();






















