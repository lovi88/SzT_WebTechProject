define(['durandal/system', 'busineslogic/productController'], function (system,productController) {
    return {
        activate: function (productName, ProductId) {
            this.product = productController.getProduct(ProductId);
            system.log(product);
        }
    }
});