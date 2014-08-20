/**
 * @fileOverview logM unit test
 * @author Max
 * created at Tue Aug 19 2014 15:14:02 GMT+0800 (CST)
 */

var divider = require('./test-unit-divider');

divider.start('logger console effect');
    
    var logger = require('../src/logger').create('test');
    logger.log('this is a log');
    logger.debug('this is a debug');
    logger.warn('this is a warn');
    logger.error('this is a error');
    logger.trace('this is a trace');

divider.end();

divider.start('file-appender write to file');

    var fileAppender = require('../src/file-appender').create('log/', 'test');
    
    for(var i = 0; i < 1000; i++) {
        fileAppender.appendToFile('this is the ' + i + ' log');
    }

    var count = 1000;
    var action = function() {
        fileAppender.appendToFile('this is the ' + count + ' log');
        count++;
    }
    setInterval(action, 1000);

divider.end();


























