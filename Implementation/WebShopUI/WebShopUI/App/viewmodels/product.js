define(
    [
        'durandal/system',
        'viewmodels/cart',
        'plugins/router',
        'busineslogic/productController'
    ], function (system, cart, router, productController) {
        return {
            product: null,
            activate: function (productName, ProductId) {
                this.product = productController.getProduct(ProductId);
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