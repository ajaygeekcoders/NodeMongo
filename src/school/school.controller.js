const SchoolService = require('./school.service');

class SchoolController {

    async addSchool(req, res, next) {
        try {
            let data = await SchoolService.addUser(req.body);
            res.status(200).send({ data: data });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }
}

module.exports = new SchoolController();