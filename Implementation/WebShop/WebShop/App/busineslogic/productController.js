define(function (require) {
    return {
        getProduct: function (ProductId) {
            alert("get prod");

            return new product(ProductId, "teszt", "CreatorPista", 50, 25, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png");
        },

        getAllProducts: function () {
            
            pds = [];
            for (var i = 0; i < 15; i++) {
                pds.push(new product(i, "tesztAllProd" + i, "CreatorPista" + i, 50 * i, 25 * i, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png"));
            }
            
            return pds;
        },

        getProductsByType: function (ProductTypeId) {
            pds = [];
            for (var i = 0; i < 15; i++) {
                pds.push(new product(i, "t" + i + " Type:" + ProductTypeId, "CreatorPista" + i, 50 * i, 25 * i, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png"));
            }

            return pds;
        },

        createProduct: function (product) {

        },

        modifyProduct: function (product) {

        },

        deleteProduct: function (product) {

        }
    };
});