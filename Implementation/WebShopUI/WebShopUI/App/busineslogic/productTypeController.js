define(function (require) {
    return {
        getRootProductTypes: function () {
            var names = ["Books", "Antique"];
            var ids = [1, 2];

            var ret = [];

            for (var i in names) {
                ret.push(new ProductType(null, null, names[i], ids[i], 20, null));
            }

            return ret;
        },

        getChildProductTypes: function (ProductTypeId) {

        },

        getAncestorTypes: function (ProductTypeId) {

        },

        createProductType: function (ProductType) {

        },

        modifyProductType: function (ProductType) {

        },

        deleteProductType: function (ProductType) {

        }
    };
});