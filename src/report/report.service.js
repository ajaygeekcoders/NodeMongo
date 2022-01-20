const SchoolModel = require('../school/school.model');
const StudentModel = require('../student/student.model');

class SchoolService {

    getSchoolWithStudentCount() {
        return SchoolModel.aggregate([
            { $match: { isActive: true } },
            {
                $lookup: {
                    from: "student",
                    localField: "_id",
                    foreignField: "schoolId",
                    as: "studentData"
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    studentCount: { $size: "$studentData" }
                }
            },
            { $sort: { name: 1 } }
        ])
    }

    getFindSchoolWithStudentCount() {
        return new Promise(async (resolve, reject) => {
            let report = [];
            let schoolData = await SchoolModel.find({ isActive: true }).sort({ name: 1 });
                if(schoolData && schoolData.length){
                    for(let school of schoolData){
                        let studentCount = await StudentModel.countDocuments({schoolId: school._id});
                        report.push({
                            _id: school._id,
                            name: school.name,
                            studentCount: studentCount
                        })
                    }
                    resolve(report);
                } else {
                    resolve(schoolData);
                }
        });
    }

}

module.exports = new SchoolService();