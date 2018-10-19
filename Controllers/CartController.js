class CartController {

    static index(req, res) {
        let items = [
            {
                title: "asdasd"
            },
            {
                title: 'dsadsa'
            },
            {
                title: 'vasdkabs'
            }
        ];

        res.render("Cart/index", {
            cartItems: items
        });
    }

}

module.exports = CartController;