const apiRoutes = require('express').Router();
const SchoolController = require('./school.controller');


apiRoutes.post('/', SchoolController.addSchool);


module.exports = apiRoutes;