define([
        'durandal/system',
        'durandal/app',
        'viewmodels/cart'
], function (sys, app, cart) {
    return {
        cart_prods: cart.products,

        activate: function () {
            sys.log(cart.products())
        }
    };
});
