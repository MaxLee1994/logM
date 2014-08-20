/**
 * @fileOverview keep all log data
 *               write log data to file in realtime(latency accepted)
 *               name files in date format
 * @author Max
 * created at Wed Aug 20 2014 16:32:02 GMT+0800 (CST)
 */

var fs = require('fs');
var moment = require('moment');
var mail = require('./mail');

var FileAppender = {
    create: function(dir, prefix) {
        var obj = {};
        var logCache = '';
        var logCacheNum = 0;
        var LOG_CACHE_MAX_NUM = 100;

        var autoWriteIndex;
        var WRITE_TO_FILE_LATENCY = 30000;
        
        var today = moment();
        var LOG_FILE_POSTFIX = '.log';

        // constructor
        autoWriteIndex = setInterval(writeToFile, WRITE_TO_FILE_LATENCY);
        fs.exists(dir, function(exits) {
            if(!exits) {
                fs.mkdirSync(dir);
            }
        })

        obj.appendToFile = function(text) {
            logCache += (text + '\n');
            logCacheNum++;
            checkLogCacheNum();
        }

        function writeToFile() {
            if(logCacheNum == 0) return;
                
            midnight();
            var filename = dir + prefix + '-' + today.format('YYYY-MM-DD') + LOG_FILE_POSTFIX;
            console.log(filename);
            fs.appendFile(filename, logCache, function(err) {
                if(err) {
//                    mail.send('max@vzhibo.tv',
//                              'LogM System Error',
//                              'file-appender.writeToFile > fs.appendFile error\n' +
//                              filename + '\n' +
//                              logCache);
                    console.trace('write to file error');
                } else {
                    console.log('write to file success');
                }
            })
            
            logCache = '';
            logCacheNum = 0;

        }
        
        // check if midnight come
        function midnight() {
            var now = moment();
            if(today.isBefore(now, 'day')) {
                console.log('midnight comes');
                today = now;
            }
        }

        // check if logCacheNum reaches max
        function checkLogCacheNum() {
            if(logCacheNum >= LOG_CACHE_MAX_NUM) {
                clearInterval(autoWriteIndex);

                writeToFile();

                autoWriteIndex = setInterval(writeToFile, WRITE_TO_FILE_LATENCY);
            }
        }
        
        return obj;
    }
}

exports.create = FileAppender.create;
