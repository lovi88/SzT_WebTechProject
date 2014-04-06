var data = {
    getProduct: function (ProductId) {
        return new product(ProductId, "teszt", "CreatorPista", 50, 25, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png");
    },

    getProducts: function (ProductTypeId) {
        return [];
    },

    getProductsByType: function (ProductTypeId) {
        return [];
    },

    getRootProductTypes: function () {
        return [];
    },

    getChildProductTypes: function (ProductTypeId) {

    },

    getAncestorTypes: function (ProductTypeId) {

    },

    getUser: function (UserName, Password) {

    }
}

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
    this.displayCreator
}