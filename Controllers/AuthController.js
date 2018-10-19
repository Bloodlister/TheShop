const User = require('../Models/User');
const bcrypt = require('bcrypt');


class AuthController {

    static LoginForm(req, res) {
        res.render('Auth/login');
    }

    static Login(req, res) {
        const user = User.findOne({user: req.body.user}, function(err, foundUser) {
            bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
                if (result) {
                    req.session.user = {
                        db_id: foundUser._id,
                        name: foundUser.user,
                        email: foundUser.email
                    };
                    res.redirect("/");
                } else {
                    res.redirect('/login',);
                }
            });
        });
    }

    static RegisterForm(req, res) {
        let data = {
            usernameError: req.query.errUser,
            emailError: req.query.errEmail,
        }
        res.render('Auth/register', data);
    }

    static Register(req, res) {
        const userData = {
            user: req.body.user,
            password: req.body.password,
            email: req.body.email
        };

        User.find({user: userData.user})
            .then(users => {
                if (typeof users !== 'undefined' && users.length > 0) {
                    res.redirect('/register?errUser=1');
                } else {
                    User.find({email: userData.email})
                        .then(users => {
                            if (typeof users !== 'undefined' && users.length > 0) {
                                res.redirect('/register?errEmail=1');
                            } else {
                                const user = new User(userData);
                                user.save((err, newUser) => {
                                    res.redirect('/login');
                                });
                            }
                        });
                }
            });

    }

    static Logout(req, res) {
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = AuthController;