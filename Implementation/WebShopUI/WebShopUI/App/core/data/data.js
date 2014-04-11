//var BusinesLogic = {
//    productController: {
//        getProduct: function (ProductId) {
//            return new product(ProductId, "teszt", "CreatorPista", 50, 25, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png");
//        },

//        getProducts: function (ProductTypeId) {
//            return [];
//        },

//        getProductsByType: function (ProductTypeId) {
//            return [];
//        },

//        createProduct: function (product) {

//        },

//        modifyProduct: function (product) {

//        },

//        deleteProduct: function (product) {

//        }

//    

//    productTypeController: {
//        getRootProductTypes: function () {
//            var names = ["Books", "Antique"];
//            var ids = [1, 2];

//            var ret = [];

//            for (var i in names) {
//                ret.push(new ProductType(null, null, names[i], ids[i], 20, null));
//            }

//            return ret;
//        },

//        getChildProductTypes: function (ProductTypeId) {

//        },

//        getAncestorTypes: function (ProductTypeId) {

//        },

//        createProductType: function (ProductType) {

//        },

//        modifyProductType: function (ProductType) {

//        },

//        deleteProductType: function (ProductType) {

//        }
//    },

//    UserController: {
//        getUser: function (UserName, Password) {

//        },

//        createUser: function (user) {

//        },

//        modifyUser: function (user) {

//        },

//        deleteUser: function (user) {

//        }

//    }

//}

function ProductType(mainType, parentType, typeName, typeId, productCount, subTypes) {
    this.mainType = mainType;
    this.parentType = parentType;
    this.typeName = typeName;
    this.typeId = typeId;
    this.productCount = productCount;
    this.subTypes = subTypes;

    this.hash =
      "#Products/" + this.mainType + "/" + this.typeName + "/" + this.typeId;

}

function product(productID, productName, creator, price, discountPrice) {
    this.productID = productID;

    this.productName = productName;
    this.description = "leírás";
    this.caption = "rövid bevezető";
    this.features = ["jó", "tuti", "zsír"];
    this.creator = creator;
    this.price = price;
    this.discountPrice = discountPrice;

    this.productType = 1;

    this.URLPath = "#Product/" + this.productName + "/" + this.productID;
    this.smallImg = "http://placehold.it/170x180";
    this.largeImg = "http://placehold.it/800x300";

    this.displayPrice = dict.TranslateText("Price", 1);
    this.displayDiscountPrice = dict.TranslateText("Discounted", 1);
    this.displayCreator = "";
}