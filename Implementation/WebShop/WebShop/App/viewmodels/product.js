define(
    [
        'durandal/system',
        'viewmodels/cart',
        'plugins/router',
        'busineslogic/productController'
    ], function (system, cart, router, productController) {
        self = null;
        return {
            product: null,
            prodCallback: function (isSuccessful, data) {
                self.product = data;
            },

            activate: function (productName, ProductId) {
                self = this;

                productController.getProduct(ProductId, this.prodCallback);

                system.log(product);
            },
            addToChart: function () {
                cart.addProductToCart(this.product);

                toast_success_click("Added To Cart: ", this.product.productName, function () {
                    router.navigate("#Cart");
                });
            }
        };
    });