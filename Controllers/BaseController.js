class BaseController {
   static Index(req, res) {
       console.log(req.session);
        res.render('Base/index', {
            item: {
                title: "THE_TITLE",
                description: "THE_DESCRIPTION",
                image: 'https://robohash.org/akshbklsav.png'
            }
        });
   }
}

module.exports = BaseController;