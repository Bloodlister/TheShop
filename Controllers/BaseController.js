class BaseController {
   static index(req, res) {
      res.render('Base/index', {
         testVar: req.session.page_views
      });
   }
}

module.exports = BaseController;