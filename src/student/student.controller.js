const StudentService = require('./student.service');
const ObjectId = require('mongoose').Types.ObjectId;
const Constants = require('../utils/constant');

class StudentController {

    async addStudent(req, res, next) {
        try {
            let exist = await StudentService.getSingleStudent({ rollNo: req.body.rollNo });
            if (exist) {
                res.status(400).send({ errMsg: Constants.MESSAGE.ROLL_NO_ALREADY_EXIST });
            } else {
                let data = await StudentService.addStudent(req.body);
                res.status(200).send({ data: data });
            }
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
            let _id = req.params._id;
            let exist = await StudentService.getSingleStudent({ name: req.body.name });
            if (exist) {
                if (exist._id.toString() === _id.toString()) {
                    let data = await StudentService.updateStudent({ _id }, req.body);
                    res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_UPDATED });
                } else {
                    res.status(400).send({ errMsg: Constants.MESSAGE.SCHOOL_ALREADY_EXIST });
                }
            } else {
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