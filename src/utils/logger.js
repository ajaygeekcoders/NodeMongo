const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp } = format;

const levels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    verbose: 4,
    debug: 5,
    silly: 6
}

const myFormat = format((info) => {
    if (info.data) {
        info = {
            ...info,
            ...info.data
        };
        delete info.data;
    }
    return info;
});

const scream = myFormat({ yell: true });

const logger = new winston.createLogger({
    format: combine(
        timestamp(),
        scream,
        format.json()
    ),
    levels: levels,
    transports: [
        new (winston.transports.Console)({ timestamp: true, colorize: true }),  // can comment this line, if you want to stop terminal console log. But still log will written
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/api.log' }),
    ]
});

module.exports = logger;