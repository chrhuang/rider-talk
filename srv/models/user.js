const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    groups: {type: [mongoose.Schema.Types.ObjectId], ref: 'Group', required: true},
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
