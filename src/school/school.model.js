const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    createdBy: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    updatedAt: { type: Date, default: Date.now() },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'user', required: true },
});

module.exports = mongoose.model('school', SchoolSchema, 'school');