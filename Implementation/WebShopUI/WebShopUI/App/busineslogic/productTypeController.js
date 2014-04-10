define(function (require) {
    return {
        getProductType: function (id) {
            //mainType, parentType, typeName, typeId, productCount, subTypes
            return new ProductType(1,1,"teszt"+id,id,50,null);
        },

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