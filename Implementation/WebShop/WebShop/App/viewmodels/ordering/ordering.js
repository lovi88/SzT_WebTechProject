/// <reference path="../../busineslogic/orderingController.js" />
define([
        'durandal/system',
        'durandal/app',
        'plugins/router',
        'viewmodels/cart',
        'viewmodels/profile/prefered_delivery',
        'busineslogic/orderingController'
        
], function (sys, app, router, cart, prefered_delivery, orderingController) {
    return {
        cart_prods: cart.products,
        cart_prod_cost: cart.totalCost,

        delivery_method: prefered_delivery.delivery_method,
        delivery_price: prefered_delivery.delivery_price,

        sendOrder: function () {
            orderingController.createOrder(cart_prods());

            cart.clearCart();
        },

        activate: function () {      
            if (cart.products().length === 0) {
                router.navigate("#");
            }
        }
    };
});
