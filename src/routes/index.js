const UserRoutes = require('../user/user.route');
const SchoolRoutes = require('../school/school.route');

module.exports = function(app){
    app.use('/api/user', UserRoutes);
    app.use('/api/school', SchoolRoutes);
}