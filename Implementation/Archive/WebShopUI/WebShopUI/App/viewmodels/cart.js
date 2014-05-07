define([
        'durandal/system',
        'durandal/app',
        'viewmodels/sign/sign',
        'core/data/user',
        'plugins/router'
], function (sys, app, sign, user, router) {

    function ch() {

        var that = this;

        this.products = ko.observableArray();

        this.totalCost = ko.computed(function () {
            var total = 0;
            for (var i = 0; i < that.products().length; i++) {
                total += that.products()[i].discountPrice;
            }

            return total;

        });

        this.activate = function () {
            this.retrieveFromStoreIfCan();
        };

        this.getProductsFromStore = function () {
            var key = this.getStoreKey();
            that.products(amplify.store(key));
        };

        this.addProductToCart = function (product) {
            that.products.push(new cartProduct(product));

            that.setProductsInStore();
        };

        this.deleteProductFromChart = function (product) {
            that.products.remove(product);

            that.setProductsInStore();
        };

        checkUserAndOrder = function () {
            if (!user.isAuthenticated()) {
                sign.openAsModal(aftermodal);
            } else {
                ToOrderingPage();
            }
        };

        aftermodal = function (dialResult) {
            if (dialResult == "OK") {
                checkUserAndOrder();
            }
        };

        this.checkoutCart = function () {
            checkUserAndOrder();
        };

        this.clearCart = function () {

        };

        ToOrderingPage = function () {
            router.navigate("#Ordering");
        };

        this.retrieveFromStoreIfCan = function () {
            
            var cartFromStore = amplify.store(this.getStoreKey());

            that.products(cartFromStore);
        };

        this.setProductsInStore = function () {
           
            var key = this.getStoreKey();
            amplify.store(key, that.products(), { expired: 7200000});
        };

        this.clearProductsFromStore = function () {
            var key = this.getStoreKey();
            amplify.store(key, null);
        };

        this.getStoreKey = function () {
            return "cart_" + user.UnicIdentifier;
        };
    }

    return new ch();

});