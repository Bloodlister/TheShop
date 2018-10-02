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
                        user: foundUser.user,
                        email: foundUser.email
                    };
                    res.redirect("/");
                } else {
                    res.redirect('/login');
                }
            });
        });
    }

    static RegisterForm(req, res) {
        res.render('Auth/register');
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
                    res.redirect('/register?error=Username is taken.');
                } else {
                    User.find({email: userData.email})
                        .then(users => {
                            if (typeof users !== 'undefined' && users.length > 0) {
                                res.redirect('/register?error=Email is taken.');
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