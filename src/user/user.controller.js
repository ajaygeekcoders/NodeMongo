const UserService = require('./user.service');

class UserController {

    async addUser(req, res, next) {
        try {
            let userData = await UserService.addUser(req.body);
            res.status(200).send({ data: userData });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }
}

module.exports = new UserController();