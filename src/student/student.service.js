
const StudentModel = require('./student.model');

class StudentService {

    addStudent(params) {
        let student = new StudentModel(params);
        return student.save();
    }

    getAllStudents(filter = {}) {
        filter['isActive'] = true;
        return StudentModel.find(filter);
    }

    getSingleStudent(filter = {}) {
        return StudentModel.findOne(filter);
    }

    updateStudent(query = {}, detail = {}) {
        detail['updatedAt'] = new Date();
        return StudentModel.updateOne(query, { $set: detail });
    }

    removeSingleStudent(filter = {}) {
        return StudentModel.deleteOne(filter);
    }

}

module.exports = new StudentService();