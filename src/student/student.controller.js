const StudentService = require('./student.service');
const ObjectId = require('mongoose').Types.ObjectId;
const Constants = require('../utils/constant');
const SchoolService = require('../school/school.service');

class StudentController {

    async addStudent(req, res, next) {
        try {
            let rollNoExist = await StudentService.getSingleStudent({ rollNo: req.body.rollNo });
            if (rollNoExist) {
                return res.status(400).send({ errMsg: Constants.MESSAGE.ROLL_NO_ALREADY_EXIST });
            }
            let schoolExist = await SchoolService.getSingleSchool({ _id: ObjectId(req.body.schoolId) });
            if (!schoolExist) {
                return res.status(400).send({ errMsg: Constants.MESSAGE.SCHOOL_NOT_EXIST });
            }
            req.body['createdBy'] = req.user._id;
            req.body['updatedBy'] = req.user._id;
            let data = await StudentService.addStudent(req.body);
            res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_SAVED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async getAllStudents(req, res, next) {
        try {
            let filter = req.query;
            let data = await StudentService.getAllStudents(filter);
            res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async getSingleStudent(req, res, next) {
        try {
            let _id = ObjectId(req.params._id);
            let data = await StudentService.getSingleStudent({ _id });
            res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async updateStudent(req, res, next) {
        try {
            let _id = ObjectId(req.params._id);
            let schoolExist = await SchoolService.getSingleSchool({ _id: ObjectId(req.body.schoolId) });
            if (!schoolExist) {
                return res.status(400).send({ errMsg: Constants.MESSAGE.SCHOOL_NOT_EXIST });
            }
            let exist = await StudentService.getSingleStudent({ rollNo: req.body.rollNo });
            if (exist) {
                if (exist._id.toString() === _id.toString()) {
                    req.body['updatedBy'] = req.user._id;
                    let data = await StudentService.updateStudent({ _id }, req.body);
                    res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_UPDATED });
                } else {
                    res.status(400).send({ errMsg: Constants.MESSAGE.ROLL_NO_ALREADY_EXIST });
                }
            } else {
                req.body['updatedBy'] = req.user._id;
                let data = await StudentService.updateStudent({ _id }, req.body);
                res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_UPDATED });
            }
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async removeSingleStudent(req, res, next) {
        try {
            let _id = ObjectId(req.params._id);
            let data = await StudentService.removeSingleStudent({ _id });
            res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_REMOVED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }
}

module.exports = new StudentController();