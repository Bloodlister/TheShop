class UserController {
    static Profile(req, res) {
      res.send('Profile Page: ' + req.session.page_views);
    }
}

module.exports = UserController;