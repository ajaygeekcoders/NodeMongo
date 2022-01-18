const apiRoutes = require('express').Router();
const SchoolController = require('./school.controller');


apiRoutes.post('/', SchoolController.addSchool);
apiRoutes.get('/', SchoolController.getAllSchools);
apiRoutes.get('/:id', SchoolController.getSingleSchool);


module.exports = apiRoutes;