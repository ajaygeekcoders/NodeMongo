require('dotenv').config(); // Put the .env file variable to process.env object;

const redis = require('redis');
const logger = require('../utils/logger');

let REDIS_URL = process.env.REDIS_URL; // 6379

// console.log({ REDIS_URL });

let client = redis.createClient({
    url: REDIS_URL
})

// connect to redis
redisConnect = async function () {
    client.on('connect', () => {
        console.log(`Redis Connect`);
        logger.info("Redis client is connected to the redis");
    });

    client.on('ready', () => {
        console.log(`Redis Ready`);
        logger.info("Redis client is ready to use redis");
    });


    client.on('error', (err) => {
        console.log(`Redis Error - ${err.message}`);
        logger.info(err.message);
    });

    client.on('end', () => {
        console.log(`Redis End`);
        logger.info("client is disconnected from the redis")
    });

    try {
        await client.connect();
        return client;
    } catch (err) {
        console.log(`Error while connecting to REDIS`)
    }
}

// setting key and value in redis as string with expiry
setValue = async (key, value, expiry = 20) => {
    try {
        // exiry in seconds
        let setData = await client.set(key, JSON.stringify(value), {
            EX: expiry,
            NX: true
          });
        return setData;
    } catch (err) {
        logger.error(`Error in getting value from redis ${err.message}`);
    }

};

// getting redis key value from redis based on key
getValue = async (key) => {
    try {
        let getData = await client.get(key);
        return getData;
    } catch (err) {
        logger.error(`Error in getting value from redis ${err.message}`);
    }
};

// getting all redis key
getAllRedisKeys = () => {
    return new Promise((resolve, reject) => {
        client.keys('*', function (err, keys) {
            if (err) reject(err)
            resolve(keys)
        });
    });
}

// remove key & it's value from redis based on key
removeRedisKey = (key) => {
    return new Promise((resolve, reject) => {
        client.del(key, function (err, keys) {
            if (err) reject(err);
            resolve(keys)
        });
    });
}

module.exports = {
    client,
    redisConnect,
    setValue,
    getValue,
    getAllRedisKeys,
    removeRedisKey
}