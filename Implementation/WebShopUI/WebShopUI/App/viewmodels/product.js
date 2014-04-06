define(['durandal/system'], function (system) {
    return {
        activate: function (productName, ProductId) {
            this.product = data.getProduct(ProductId);
            system.log(product);
        }
    }
});