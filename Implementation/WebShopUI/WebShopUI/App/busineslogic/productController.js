define(function (require) {
    return {
        getProduct: function (ProductId) {
            return new product(ProductId, "teszt", "CreatorPista", 50, 25, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png");
        },

        getProducts: function (ProductTypeId) {
            return [];
        },

        getProductsByType: function (ProductTypeId) {
            return [];
        },

        createProduct: function (product) {

        },

        modifyProduct: function (product) {

        },

        deleteProduct: function (product) {

        }
    };
});