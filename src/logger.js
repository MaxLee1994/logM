/**
 * @fileOverview Logger object
 *               log methods for user
 * @author Max
 * created at Tue Aug 19 2014 15:24:22 GMT+0800 (CST)
 */

var colors = require('colors');
var moment = require('moment');
var loggerLevel = require('./logger-level');
var mail = require('./mail');

colors.setTheme({
    log: 'grey',
    debug: 'green',
    warn: 'yellow',
    error: 'red',
    trace: 'blue'
});

var Logger = {
    create: function(category, fileAppender, mask) {
        var obj = {};
        
        obj.log = function() {
            if(mask & loggerLevel.LOG_MASK) return;
            var text = '';
            for(var i in arguments) {
                text += arguments[i] + ' ';
            }
            
            console.log(getPrefix(loggerLevel.LOG).log + text);
            if(fileAppender) fileAppender.appendToFile(getPrefix(loggerLevel.LOG) + text);
        }
        obj.debug = function() {
            if(mask & loggerLevel.DEBUG_MASK) return;
            var text = '';
            for(var i in arguments) {
                text += arguments[i] + ' ';
            }
            
            console.log(getPrefix(loggerLevel.DEBUG).debug + text);
            if(fileAppender) fileAppender.appendToFile(getPrefix(loggerLevel.DEBUG) + text);
        }
        obj.warn = function() {
            if(mask & loggerLevel.WARN_MASK) return;
            var text = '';
            for(var i in arguments) {
                text += arguments[i] + ' ';
            }
            
            console.warn(getPrefix(loggerLevel.WARN).warn + text);
            if(fileAppender) fileAppender.appendToFile(getPrefix(loggerLevel.WARN) + text);
        }
        obj.error = function() {
            if(mask & loggerLevel.ERROR_MASK) return;
            var text = '';
            for(var i in arguments) {
                text += arguments[i] + ' ';
            }
            
            console.error(getPrefix(loggerLevel.ERROR).error + text);
            if(fileAppender) fileAppender.appendToFile(getPrefix(loggerLevel.ERROR) + text);
        }
        obj.trace = function() {
            if(mask & loggerLevel.TRACE_MASK) return;
            var text = '';
            for(var i in arguments) {
                text += arguments[i] + ' ';
            }
            
            console.trace(getPrefix(loggerLevel.TRACE).trace + text);
            if(fileAppender) fileAppender.appendToFile(getPrefix(loggerLevel.TRACE) + text);
        }
        obj.notifyMaintainer = function(to, subject, content, noQueue) {
            var mailObj = {
                to: to,
                subject: subject,
                content: content,
                error: function(err) {
                    obj.error('mail to ' + to + ', subject is ' + subject + ' fail!' + 'error info: ' + err);
                }
            };
            mail.send(mailObj, noQueue);
        }
        
        // get yyyy-MM-dd HH:mm:ss format moment
        function getMoment() {
            return moment().format('YYYY-MM-DD HH:mm:ss');
        }
        // get prefix
        function getPrefix(level) {
            return '[' + getMoment() + '] ' + category + ' - ' + level + ': '; 
        }
        
        return obj;
    }
}

exports.create = Logger.create;