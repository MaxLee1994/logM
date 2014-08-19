/**
 * @fileOverview generate a nice style console divider to divide every test unit
 * @author Max
 * created at Tue Aug 19 2014 23:24:20 GMT+0800 (CST)
 */

var colors = require('colors');
var start = function(title) {
    console.log(title.yellow);
    console.log('----------------------------------------------------------------'.grey);
}
var end = function() {
    console.log('----------------------------------------------------------------\n'.grey);
}

exports.start = start;
exports.end = end;