const RedisService = require('./redis.service');

let title = 'Redis ';

class RedisController {

    // adding new data to redis
    addRedisKey = async (req, res) => {
        try {
            let { key, value, expiry } = req.body;
            expiry = expiry ? parseInt(expiry) : 600;
            let redisData = await RedisService.addRedisKey(key, value, expiry)
            return res.status(200).send({ data: redisData, message: `Data saved in redis key - ${key}` });
        } catch (err) {
            return res.status(400).send({ data: {}, message: `Data not saved in redis key - ${key}` });
        }
    }

    // update data in redis
    updateRedisKey = async (req, res) => {
        try {
            let { key, value, expiry } = req.body;
            let redisData = await RedisService.updateRedisKey(key, value, expiry);
            return res.status(200).send({ data: redisData, message: `Data updated in redis key - ${key}` });
        } catch (err) {
            return res.status(400).send({ data: {}, message: `Data not updated in redis key - ${key}` });
        }
    }

    // get the list of redis key
    getAllRedisKey = async (req, res) => {
        try {
            const redisData = await RedisService.getAllRedisKey();
            return res.status(200).send({ data: redisData, message: `All redis Data fetched` });
        } catch (err) {
            return res.status(400).send({ data: redisData, message: `Error on redis Data fetched` });
        }
    }

    // get the single redis key data
    getSingleRedisKey = async (req, res) => {
        try {
            let key = req.params.redisKey;
            const redisData = await RedisService.getSingleRedisKey(key);
            return res.status(200).send({ data: redisData, message: `Redis Data fetched` });
        } catch (err) {
            return res.status(400).send({ data: redisData, message: `Error on redis Data fetched` });
        }
    }

    // remove single redis key
    removeRedisKey = async (req, res) => {
        try {
            let key = req.params.redisKey;
            const redisData = await RedisService.removeRedisKey(key);
            return res.status(200).send({ data: redisData, message: `Redis Key Data Removed` });  
        } catch (err) {
            return res.status(400).send({ data: redisData, message: `Error on redis key data deelte` });
        }
    }
}

module.exports = new RedisController()