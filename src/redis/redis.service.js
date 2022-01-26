const { commandOptions } = require('redis');
const { client, setValue, getValue, getAllRedisKeys, removeRedisKey } = require('../config/redis');

class RedisService {

    // add data to redis
    async addRedisKey(key, value, expiry) {
        try {
            return setValue(key, value, expiry);
        } catch (err) {
            console.log(`Error in setting value to redis ${err.message}`);
        }
    }

    // update data in redis
    async updateRedisKey(key, value, expiry) {
        try {
            return setValue(key, value, expiry);
        } catch (err) {
            console.log(`Error in setting value to redis ${err.message}`);
        }
    }

    // get the list of redis key
    async getAllRedisKey() {
        try {
            return getAllRedisKeys();
        } catch (err) {
            console.log(`Error in getting value to redis ${err.message}`);
        }
    }

    // get single redis detail
    async getSingleRedisKey(key) {
        try {
            return await getValue(key);
        } catch (err) {
            console.log(`Error in getting value to redis ${err.message}`);
        }
    }

    // remove single redis detail
    async removeRedisKey(key) {
        try {
            return removeRedisKey(key);
        } catch (err) {
            console.log(`Error in getting value to redis ${err.message}`);
        }
    }
}

module.exports = new RedisService();