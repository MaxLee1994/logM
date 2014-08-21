/**
 * @fileOverview logM main file
 *               controller and expose interface
 * @author Max
 * created at Tue Aug 19 2014 15:23:11 GMT+0800 (CST)
 */

var fileAppender = require('./file-appender');
var loggerLevel = require('./logger-level');
var logger = require('./logger');

var loggers = {};

// read `logM-config.json` and generate loggers
var configure = function(configFile) {
    var config = require(configFile);
    for(var i in config) {

        // construct fileAppender
        var newFileAppender = fileAppender.create(config[i].logDir, config[i].filePrefix);
        // generate exclude mask
        var mask = 0;
        if(config[i].exclude) {
            for(var j in config[i].exclude) {
                
                switch(config[i].exclude[j]) {
                    case loggerLevel.LOG:
                        mask += loggerLevel.LOG_MASK;
                        break;
                    case loggerLevel.DEBUG:
                        mask += loggerLevel.DEBUG_MASK;
                        break;
                    case loggerLevel.WARN:
                        mask += loggerLevel.WARN_MASK;
                        break;
                    case loggerLevel.ERROR:
                        mask += loggerLevel.ERROR_MASK;
                        break;
                    case loggerLevel.TRACE:
                        mask += loggerLevel.TRACE_MASK;
                        break;
                }
            }
        }

        // construct logger
        var newLogger = logger.create(i, newFileAppender, mask);
        loggers[i] = newLogger;
    }
}



var getLogger = function(category) {
    
    var logger = loggers[category];
    
    if(logger == undefined) {
        return category + ' logger not found in logM-config.json';
    } else {
        return logger;
    }
}

exports.configure = configure;
exports.getLogger = getLogger;