define(function (require) {
    return {
        getProductType: function (id) {
            //mainType, parentType, typeName, typeId, productCount, subTypes
            return new ProductType(1, 1, "teszt" + id, id, 50, null);
        },

        getRootProductTypes: function () {
            var names = ["Books", "Antique"];
            var ids = [1, 2];

            var ret = [];

            for (var i in names) {
                ret.push(new ProductType(1, 1, names[i], ids[i], 20, null));
            }

            return ret;
        },

        getChildProductTypes: function (ProductTypeId) {
            var subs1 = [
                 {
                     parentType: ProductTypeId,
                     typeName: dict.TranslateText("Adatbázis - kezelés", 0),
                     typeId: 2,
                     productCount: 70,
                 },
                 {
                     parentType: ProductTypeId,
                     typeName: dict.TranslateText("Általános ismeretek", 0),
                     typeId: 3,
                     productCount: 80
                 },
                 {
                     parentType: ProductTypeId,
                     typeName: dict.TranslateText("Felhasználói programok", 0),
                     typeId: 4,
                     productCount: 80
                 },
                 {
                     parentType: ProductTypeId,
                     typeName: dict.TranslateText("Hardver", 0),
                     typeId: 5,
                     productCount: 80
                 },
                 {
                     parentType: ProductTypeId,
                     typeName: dict.TranslateText("Internet, hálózatok", 0),
                     typeId: 6,
                     productCount: 10
                 },
                 {
                     parentType: ProductTypeId,
                     typeName: dict.TranslateText("Operációs rendszerek", 0),
                     typeId: 7,
                     productCount: 15
                 },
                 {
                     parentType: ProductTypeId,
                     typeName: dict.TranslateText("Programozás, fejlesztés", 0),
                     typeId: 8,
                     productCount: 150
                 },
                 {
                     parentType: ProductTypeId,
                     typeName: dict.TranslateText("További könyveink", 0),
                     typeId: 9,
                     productCount: 500
                 }
            ];

            var subs = [];

            for (var key in subs1) {
                pt = new ProductType(0,ProductTypeId,subs1[key].typeName, subs1[key].typeId, subs1[key].productCount, null);
                
                subs.push(pt);
            }

            return subs;
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