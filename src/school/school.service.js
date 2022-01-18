
const SchoolModel = require('./school.model');

class SchoolService {

    addSchool(params) {
        let school = new SchoolModel(params);
        return school.save();
    }

    getAllSchools(filter = {}) {
        filter['isActive'] = true;
        return SchoolModel.find(filter);
    }

    getSingleSchool(filter = {}) {
        return SchoolModel.findOne(filter);
    }

    updateSchool(query = {}, detail = {}) {
        detail['updatedAt'] = new Date();
        return SchoolModel.updateOne(query, { $set: detail });
    }

    removeSingleSchool(filter = {}) {
        return SchoolModel.deleteOne(filter);
    }

}

module.exports = new SchoolService();