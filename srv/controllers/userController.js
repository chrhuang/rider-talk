const User = require("../models/user");
const user_list = async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.send(e, 500)
    }
}

const user_detail = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
            .populate('groups', '-__id -__v -users -createdAt -updatedAt');
        res.send(user)
    } catch (e) {
        res.send(e, 500)
    }
}

module.exports = {user_list, user_detail};
