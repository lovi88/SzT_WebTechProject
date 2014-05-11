define(function (require) {
    if (fakeControllers) {
        return new fakeProductController();
    }

    return {
        getProduct: function (ProductId, callback) {
            amplify.request({
                resourceId: "GetProduct",
                data: {
                    id: ProductId
                },
                success: function (data) {
                    js_data = new productJsFromSv(data)
                    callback(true, js_data);
                },
                error: function (data) {
                    callback(false, data);
                }
            });
        },

        getAllProducts: function (callback) {
            var cb = callback;

            amplify.request({
                resourceId: "GetAllProduct",
                success: function (data) {
                    js_data = productJsFromSvArray(data);
                    callback(true, js_data);
                },
                error: function (data) {
                    callback(true, data);
                }
            });
        },

        getProductsByType: function (ProductTypeId, callback) {
            amplify.request({
                resourceId: "GetProductsByType",
                data: {
                    tid: ProductTypeId
                },
                success: function (data) {
                    js_data = productJsFromSvArray(data);
                    callback(true, js_data);
                },
                error: function (data) {
                    callback(true, data);
                }
            });
        },

        createProduct: function (product, callback) {
            amplify.request({
                resourceId: "CreateProduct",
                data: product,
                success: function (data) {
                    callback(true, data);
                },
                error: function (data) {
                    callback(false, data);
                }

            });
        },

        modifyProduct: function (product, callback) {
            product.id = product.productID;

            amplify.request({
                resourceId: "ModifyProduct",
                data: product,
                success: function (data) {
                    callback(true, data);
                },
                error: function (data) {
                    callback(false, data);
                }

            });
        },

        deleteProduct: function (product, callback) {
            
            amplify.request({
                resourceId: "DeleteProduct",
                data: {
                    id: product.productID
                },
                success: function (data) {
                    callback(true, data);
                },
                error: function (data) {
                    callback(false, data);
                }

            });
        },

        getProductFake: function myfunction() {
            return new product(ProductId, "teszt", "CreatorPista", 50, 25, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png");
        },

        getAllProductsFake: function () {
            pds = [];
            for (var i = 0; i < 15; i++) {
                pds.push(new product(i, "tesztAllProd" + i, "CreatorPista" + i, 50 * i, 25 * i, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png"));
            }

            return pds;
        }

    };
});