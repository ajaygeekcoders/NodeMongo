const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    name: { type: String, require: true },
    address: { type: String },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('school', SchoolSchema, 'school');