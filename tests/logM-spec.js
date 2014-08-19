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


























