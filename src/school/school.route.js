const apiRoutes = require('express').Router();
const SchoolController = require('./school.controller');


apiRoutes.post('/', SchoolController.addSchool);
apiRoutes.get('/', SchoolController.getAllSchools);
apiRoutes.get('/:_id', SchoolController.getSingleSchool);
apiRoutes.put('/:_id', SchoolController.updateSchool);
apiRoutes.delete('/:_id', SchoolController.removeSingleSchool);


module.exports = apiRoutes;