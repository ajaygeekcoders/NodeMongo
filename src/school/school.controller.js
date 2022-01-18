const SchoolService = require('./school.service');
const ObjectId = require('mongoose').Types.ObjectId;
const Constants = require('../utils/constant');
class SchoolController {

    async addSchool(req, res, next) {
        try {
            let exist = await SchoolService.getSingleSchool({ name: req.body.name });
            if (exist) {
                res.status(400).send({ errMsg: Constants.MESSAGE.SCHOOL_ALREADY_EXIST });
            } else {
                let data = await SchoolService.addSchool(req.body);
                res.status(200).send({ data: data });
            }
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async getAllSchools(req, res, next) {
        try {
            let filter = req.query;
            let data = await SchoolService.getAllSchools(filter);
            res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async getSingleSchool(req, res, next) {
        try {
            let _id = ObjectId(req.params._id);
            let data = await SchoolService.getSingleSchool({ _id });
            res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async updateSchool(req, res, next) {
        try {
            let _id = req.params._id;
            let exist = await SchoolService.getSingleSchool({ name: req.body.name });
            if (exist) {
                if (exist._id.toString() === _id.toString()) {
                    let data = await SchoolService.updateSchool({ _id }, req.body);
                    res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_UPDATED });
                } else {
                    res.status(400).send({ errMsg: Constants.MESSAGE.SCHOOL_ALREADY_EXIST });
                }
            } else {
                let data = await SchoolService.updateSchool({ _id }, req.body);
                res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_UPDATED });
            }
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async removeSingleSchool(req, res, next) {
        try {
            let _id = ObjectId(req.params._id);
            let data = await SchoolService.removeSingleSchool({ _id });
            res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_REMOVED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }
}

module.exports = new SchoolController();