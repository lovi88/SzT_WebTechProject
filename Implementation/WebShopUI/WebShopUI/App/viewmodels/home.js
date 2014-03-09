define(['durandal/system'], function (sys) {
    var allproducts = function () {
        var that = this;

        this.displayName = dict.TranslateText('Welcome to the Lovas WebShop!', 1);
        this.displayToCart = dict.TranslateText('Add to Cart',1);


        this.Products = ko.observableArray();


        this.isTestMode = true;
        this.generateTestProducts = function (times) {
            if (typeof language === "undefined") {
                var times = 10;
            }

            for (var i = 0; i < times; i++) {

                var actual = {
                    productID: i,
                    productName: "pname" + i,
                    maker: "pisti" + i,
                    price: 25 * i,
                    displayPrice: dict.TranslateText("Price", 1),
                    discountPrice: 20 * i,
                    displayDiscountPrice: dict.TranslateText("Discounted", 1)
                }

                sys.log(actual);


                that.Products.push(actual);
            }

        }

    };


    return allproducts;
});