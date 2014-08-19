/**
 * @fileOverview 
 * @author Max
 * created at Tue Aug 19 2014 15:24:22 GMT+0800 (CST)
 */

var colors = require('colors');
var moment = require('moment');

var Logger = {
    create: function(category) {
        var obj = {};
        
        obj.log = function(text) {
            
        }
        obj.debug = function(text) {
            
        }
        obj.warn = function(text) {
            
        }
        obj.error = function(text) {
            
        }
        obj.trace = function(text) {
            
        }
        
        // get yyyy-MM-dd HH:mm:ss format moment
        function getMoment() {
            return moment().format('YYYY-MM-DD HH:mm:ss');
        }
        // get prefix
        function getPrefix(level) {
            return '[' + getMoment() + '] ' + category + ' - ' + level + ':'; 
        }
        
        return obj;
    }
}