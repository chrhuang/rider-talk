const mongoose = require('mongoose');
const User = require("./user");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: { type: String, required: true },
    users:{ type: [mongoose.Schema.Types.ObjectId], ref: 'User', required: true },
}, {
    timestamps: true,
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
