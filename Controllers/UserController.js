const User = require('../Models/User');
const bcrypt = require('bcrypt');


class UserController {
    static Profile(req, res) {
        res.send('Username: ' + req.session.user + ' | Profile Page: ' + req.session.page_views);
    }

    static Edit(req, res) {
        res.send("Edit User");
    }
}

module.exports = UserController;