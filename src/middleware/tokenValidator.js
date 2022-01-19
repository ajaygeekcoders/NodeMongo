const e = require('express');
const JWT = require('./jwt');

module.exports = function (req, res, next) {
    let authToken = req.headers.authorization;
    if (authToken) {
        JWT.verifyToken(authToken, (err, decoded) => {
            if (err) {
                console.log({ err })
                res.status(401).send('Token is expired');
            } else {
                req['decoded'] = decoded;
                console.log({ decoded });
                next();
            }
        });
    } else {
        res.status(401).send('Token is missing');
    }
}