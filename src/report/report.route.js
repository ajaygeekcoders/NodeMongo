const apiRoutes = require('express').Router();
const ReportController = require('./report.controller');


apiRoutes.get('/school.wise.student.count', ReportController.getSchoolWithStudentCount);
apiRoutes.get('/find.school.wise.student.count', ReportController.getFindSchoolWithStudentCount);
apiRoutes.get('/find.school.wise.student.count.prms', ReportController.getFindSchoolWithStudentCountPrms);

module.exports = apiRoutes;