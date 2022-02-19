const ReportService = require('./report.service');
const ObjectId = require('mongoose').Types.ObjectId;
const Constants = require('../utils/constant');
const RedisService = require('../redis/redis.service');
class SchoolController {

    async getSchoolWithStudentCount(req, res, next) {
        try {
            let redisKey = `SchoolWithStudentCount`;
            let redisDataExist = await RedisService.getSingleRedisKey(redisKey);
            let data = [];
            if(redisDataExist){
                data = JSON.parse(redisDataExist);
            } else {
                data = await ReportService.getSchoolWithStudentCount();
                RedisService.addRedisKey(redisKey, data);
            }
            return res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            return res.status(400).send({ errMsg: err.message })
        }
    }

    async getFindSchoolWithStudentCount(req, res, next) {
        try {
            let redisKey = `FindSchoolWithStudentCount`;
            let redisDataExist = await RedisService.getSingleRedisKey(redisKey);
            let data = [];
            if(redisDataExist){
                data = JSON.parse(redisDataExist);
            } else {
                data = await ReportService.getFindSchoolWithStudentCountPrms();
                RedisService.addRedisKey(redisKey, data);
            }
            return res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async getFindSchoolWithStudentCountPrms(req, res, next) {
        try {
            let data = [];
            
                data = await ReportService.getFindSchoolWithStudentCountPrms();
             
            return res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }
}

module.exports = new SchoolController();