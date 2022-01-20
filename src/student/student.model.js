const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: { type: String, require: true },
    schoolId: { type: Schema.Types.ObjectId, ref: 'school', required: true },
    class: { type: Number, require: true },
    rollNo: { type: Number, require: true, unique: { index: true } },
    address: { type: String },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    createdBy: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    updatedAt: { type: Date, default: Date.now() },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'user', required: true },
});

module.exports = mongoose.model('student', StudentSchema, 'student');