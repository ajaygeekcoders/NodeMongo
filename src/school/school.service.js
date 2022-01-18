
const SchoolModel = require('./school.model');

class SchoolService {

    addSchool(params) {
        let school = new SchoolModel(params);
        return school.save();
    }

    getAllSchools(filter = {}) {
        return SchoolModel.find(filter);
    }

    getSingleSchool(filter = {}) {
        return SchoolModel.findOne(filter);
    }

    updateSchool(query = {}, data = {}) {
        return SchoolModel.updateOne(query, { $set: data });
    }

}

module.exports = new SchoolService();