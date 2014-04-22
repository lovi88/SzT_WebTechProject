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

        activate = function () {

        };

        this.addProductToCart = function (product) {

            that.products.push(new cartProduct(product));
        };

        this.deleteProductFromChart = function (product) {
            that.products.remove(product);
        };

        this.checkoutCart = function () {
            checkUserAndOrder();
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

        ToOrderingPage = function () {
            router.navigate("#Ordering");
        };

    }

    return new ch();

});