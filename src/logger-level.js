/**
 * @fileOverview logger level enum
 * @author Max
 * created at Tue Aug 19 2014 23:17:28 GMT+0800 (CST)
 */

module.exports = {
    LOG: 'LOG',
    DEBUG: 'DEBUG',
    WARN: 'WARN',
    ERROR: 'ERROR',
    TRACE: 'TRACE',
    LOG_MASK: parseInt(1, 2),
    DEBUG_MASK: parseInt(10, 2),
    WARN_MASK: parseInt(100, 2),
    ERROR_MASK: parseInt(1000, 2),
    TRACE_MASK: parseInt(10000, 2)
}