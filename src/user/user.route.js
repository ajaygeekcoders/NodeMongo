const apiRoutes = require('express').Router();
const UserController = require('./user.controller');


apiRoutes.post('/', UserController.addUser);


module.exports = apiRoutes;