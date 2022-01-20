const ReportService = require('./report.service');
const ObjectId = require('mongoose').Types.ObjectId;
const Constants = require('../utils/constant');
class SchoolController {

    async getSchoolWithStudentCount(req, res, next) {
        try {
            let data = await ReportService.getSchoolWithStudentCount();
              res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async getFindSchoolWithStudentCount(req, res, next) {
        try {
            let data = await ReportService.getFindSchoolWithStudentCount();
              res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }
}

module.exports = new SchoolController();