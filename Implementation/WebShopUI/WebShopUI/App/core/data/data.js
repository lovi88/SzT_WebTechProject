function ProductType(mainType, parentType, typeName, typeId, productCount, subTypes) {
    this.mainType = mainType;
    this.parentType = parentType;
    this.typeName = typeName;
    this.typeId = typeId;
    this.productCount = productCount;
    this.subTypes = subTypes;

    this.hash =
      "#Products/" + this.mainType + "/" + 1 + "/" + this.typeName + "/" + this.typeId;

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

function cartProduct(product) {
    this.product = product;

    this.productID = product.productID;

    this.productName = product.productName;
    this.description = product.description;
    this.caption = product.caption;
    this.features = product.features;
    this.creator = product.creator;
    this.price = product.price;
    this.discountPrice = product.discountPrice;

    this.productType = product.productType;

    this.URLPath = product.URLPath;
    this.smallImg = product.smallImg;
    this.largeImg = product.largeImg;

}

function userEntity() {
    this.uid = 0;
    this.isAdmin = false;

    this.profile_data = {
        name: "Lovas István",
        email: "l.pista@example.com",
        birthDate: "1988.03.20"
    };

    this.delivery_address = {
        country: "Hungary",
        city: "Budapest",
        zip_code: 1111,
        road_num: "Delivery str. 80"
    };

    this.billing_address = {
        country: "Hungary",
        city: "Budapest",
        zip_code: 1111,
        road_num: "Billing str. 80"
    };

    this.preferred_delivery = {
        delivery_method: "personal",
        selectedStore: "bp. 2. sz üzlet",
        delivery_price: 80
    };
}
