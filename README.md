# File Logger for `Node.js` @version 0.2.4

## installation
    npm install logm
    
## usage
    var logM = require('logm');
    logM.configure('logM-config.json');
    var logger = logM.getLogger('logger');
    
    logger.log('this is a log');
    logger.debug('this is a debug');
    logger.warn('this is a warn');
    logger.error('this is a error');
    logger.trace('this is a trace');
    
## config
loggers must be defined in config file, and pass the config file to `configure` method.   
`configure` must be called before `getLogger`

**config file sample**

    {  
        "logger1": {  
            "exclude": [  
              "DEBUG"  
            ],  
            logDir": "log/",
            "filePrefix": "test"
        },
        "logger2": {
            "exclude": [
                "LOG", "WARN"
            ],
            "logDir": "log/",
            "filePrefix": "test"
        },
        "logger3": {
            "logDir": "log/",
            "filePrefix": "tesss"
        },
        "logger4": {
            "logDir": "logg/",
            "filePrefix": "test"
        }
    }
   
## notify maintainer by mail
**usage**
	
	var logger = logM.getLogger('logger');
	logger.notifyMaintainer('maintainer@website.com',
						    'subject',
						    'content');
				
**annotation**	

1. mail host is set to author Max <max@vzhibo.tv>
2. no matter how many mails with same subject in 30 min will only be sent once.
3. if u want to send a specific mail ignore annotation 2, append a `true` param calling the `notifyMaintainer` method, which means no queue for this mail.
