const Group = require("../models/group");
const User = require("../models/user");

const group_detail = async (req, res) => {
    try {
        const group = await Group.findById(req.params.groupId).populate('users', '-__id -__v -groups -createdAt -updatedAt');
        res.send(group)
    } catch (e) {
        res.send(e, 500)
    }
}

const group_create = async (req, res) => {
    try {
        const group = await Group.create(req.body)
        res.send(group)
    } catch (e) {
        res.send(e, 500)
    }
}

const add_user_to_group = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        let group = await Group.findById(req.params.groupId)
        await User.findOneAndUpdate({_id: user._id}, {$addToSet: {groups: group._id}})
        await Group.findOneAndUpdate({_id: group._id}, {$addToSet: {users: user._id}})
        group = await Group.findById(req.params.groupId);
        res.send(group)
    } catch (e) {
        res.send(e, 500)
    }
}

module.exports = {group_detail, group_create, add_user_to_group};
