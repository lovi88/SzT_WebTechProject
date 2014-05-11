var fakeControllers = true;

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

    this.productTypeID = 1;

    this.urlPath = "#Product/" + this.productName + "/" + this.productID;

    this.smallImg = "App/images/large/prod_" + this.productID;
    this.largeImg = "App/images/small/prod_" + this.productID;

    this.smallImg = "http://placehold.it/170x180";
    this.largeImg = "http://placehold.it/800x300";

    //this.displayPrice = dict.TranslateText("Price", 1);
    //this.displayDiscountPrice = dict.TranslateText("Discounted", 1);
    //this.displayCreator = "";
}

function productJsFromSvArray(sv_product_array) {

    var js_product_array = [];

    for (var key in sv_product_array) {
        js_product_array.push(new productJsFromSv(sv_product_array[key]));
    }

    return js_product_array;
}

function productJsFromSv(sv_product) {
    
    for (var k in sv_product) {
        tkey = convertSvAttrNameToJsAttrName(k);
        this[tkey] = sv_product[k];
    }

    this.urlPath = "#Product/" + sv_product.ProductName + "/" + sv_product.ProductID;

    this.smallImg = "App/images/large/prod_" + sv_product.ProductID;
    this.largeImg = "App/images/small/prod_" + sv_product.ProductID;

}


function convertSvAttrNameToJsAttrName(attr) {
    return attr.charAt(0).toLowerCase() + attr.slice(1);
}

function productSvFromJs(js_product) {

}

function convertJsAttrNameToSvAttrName(attr) {
    result = attr;
    result[0] = result[0].toUpperCase();

    return result;
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

    this.urlPath = product.urlPath;
    this.smallImg = product.smallImg;
    this.largeImg = product.largeImg;

}

function userEntity() {
    this.UId = 0;
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

    this.passHash = "";
}

function serverUser() {
    this.UId = "";
    this.IsAdmin = "";

    this.Name = "";
    this.Email = "";
    this.BirthDate = "";

    this.DeliveryCountry = "";
    this.DeliveryCity = "";
    this.DeliveryZipCode = "";
    this.DeliveryRoadNum = "";

    this.BillingCountry = "";
    this.BillingCity = "";
    this.BillingZipCode = "";
    this.BillingRoadNum = "";

    this.DeliveryMethod = "";
    this.SelectedStore = "";
    this.DeliveryPrice = "";

    this.PasswordHash = "";

}
