define(['durandal/system'], function (system) {
    return {
        activate: function (productName, ProductId) {
            system.log("product");
            system.log("productName: " + productName);
            system.log("ProductId: " + ProductId);

        }
    }
});