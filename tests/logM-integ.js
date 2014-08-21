/**
 * @fileOverview logM integration test
 * @author Max
 * created at Thu Aug 21 2014 10:59:25 GMT+0800 (CST)
 */

var expect = require('expect.js');

describe('logM integration test', function() {
    var logM = require('../src/index');
    logM.configure('../logM-config.json');
    
    var TIMEOUT = 31 * 1000;
    
    
    it('logger1 test single exclude', function(done) {
        this.timeout(TIMEOUT);
        var logger1 = logM.getLogger('logger1');
        logger1.log('this is log 1');
        logger1.error('this is log 2');
        logger1.warn('this is log 3');
        logger1.debug('this is log 4');
        logger1.trace('this is log 5');
        setTimeout(done, TIMEOUT - 500);
    })
    
    it('logger2 test more exclude and sam file append', function(done) {
        this.timeout(TIMEOUT);
        var logger2 = logM.getLogger('logger2');
        logger2.log('this is log 6');
        logger2.error('this is log 7');
        logger2.warn('this is log 8');
        logger2.debug('this is log 9');
        logger2.trace('this is log 10');
        setTimeout(done, TIMEOUT - 500);
    })

    it('logger3 test different file', function(done) {
        this.timeout(TIMEOUT);
        var logger3 = logM.getLogger('logger3');
        logger3.log('this is log 11');
        logger3.error('this is log 12');
        logger3.warn('this is log 13');
        logger3.debug('this is log 14');
        logger3.trace('this is log 15');
        setTimeout(done, TIMEOUT - 500);
    })
    
    it('logger4 test different dir', function(done) {
        this.timeout(TIMEOUT);
        var logger4 = logM.getLogger('logger4');
        logger4.log('this is log 16');
        logger4.error('this is log 17');
        logger4.warn('this is log 18');
        logger4.debug('this is log 19');
        logger4.trace('this is log 20');
        setTimeout(done, TIMEOUT - 500);
    })
    
    it('logger5 test logger not exists', function() {
        var loggerNotExist = logM.getLogger('logger5');
        expect(loggerNotExist).to.be('logger5 logger not found in logM-config.json');
    })
    
})    
    
    
    


    

