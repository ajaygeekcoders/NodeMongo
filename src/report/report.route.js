const apiRoutes = require('express').Router();
const ReportController = require('./report.controller');


apiRoutes.get('/school.wise.student.count', ReportController.getSchoolWithStudentCount);
apiRoutes.get('/find.school.wise.student.count', ReportController.getFindSchoolWithStudentCount);

module.exports = apiRoutes;