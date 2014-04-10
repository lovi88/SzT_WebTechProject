define(['durandal/system', 'durandal/app', 'viewmodels/breadcrumb'], function (sys, app, breadcrumb) {


    var allproducts = function () {
        var that = this;

        this.displayName = dict.TranslateText('Welcome to the Lovas WebShop!', 1);
        this.displayToCart = dict.TranslateText('Add to Cart', 1);


        this.Products = ko.observableArray();

        this.addToChart = function (data) {
            alert(data.productName);
        }

        this.isTestMode = true;
        this.generateTestProducts = function (times) {
            if (typeof language === "undefined") {
                var times = 10;
            }

            for (var i = 0; i < times; i++) {
                //(productID, productName, creator, price, discountPrice)
                actual = new product(i, "pname" + i, "creator" + i, 25 * i, 20 * i);

                sys.log(actual);


                that.Products.push(actual);
            }

        }
        //:MainCat/:MainCatId(/:ActCat/:ActCatID)
        this.activate = function (MainCat, MainCatId, ActCat, ActCatID) {





            this.Products.push("asd");
            //breadcrumb.productTypeIsLast()
            //breadcrumb.breadcrumbs.push({ name: "TTT", isActive: true, link: "#" })
        }

        this.getProductCat = function (id) {
            var productType = productTypeController.getProductType(id);
        }

    };


    return allproducts;
});