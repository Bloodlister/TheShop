module.exports = function(app) {
    app.use(function(req, res, next) {
       app.locals.session = req.session;
       next();
    });

    app.use(function(req, res, next) {
       if(req.session.page_views === undefined) {
           req.session.page_views = 0;
       } else {
           req.session.page_views++;
       }
       next();
   });
}