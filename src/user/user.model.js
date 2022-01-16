const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, require: true },
    mobile: { type: Number },
    email: { type: String, require: true, unique: { index: true } },
    password: { type: String, require: true },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('user', UserSchema, 'user');