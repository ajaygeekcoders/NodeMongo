const JWT = require('./jwt');

const UserService = require('../user/user.service');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = function (req, res, next) {
    let authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).send({ message: "Token is missing" });
    }
    JWT.verifyToken(authToken, async (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Token is expired", err });
        }
        req['decoded'] = decoded;
        let userData = await UserService.getSingleUser({ _id: ObjectId(decoded._id) });
        if (!userData) {
            return res.status(401).send({ message: "User is not active" });
        }
        req['user'] = userData;
        // console.log({ decoded, userData });
        next();
    });
}