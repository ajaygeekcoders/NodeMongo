
const SchoolModel = require('./school.model');

class SchoolService {

    addUser(params){
        let school = new SchoolModel(params);
        return school.save();
    }

}

module.exports = new SchoolService();