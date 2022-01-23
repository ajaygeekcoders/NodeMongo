const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: { index: true } },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    resetCode: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('user', UserSchema, 'user');