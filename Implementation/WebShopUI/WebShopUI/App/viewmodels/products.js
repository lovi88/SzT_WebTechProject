define(['durandal/system', 'durandal/app', 'viewmodels/breadcrumb', 'busineslogic/productController'],
    function (sys, app, breadcrumb, productController) {

        var allproducts = function () {
            var that = this;

            this.displayName = dict.TranslateText('Welcome to the Lovas WebShop!', 1);
            this.displayToCart = dict.TranslateText('Add to Cart', 1);

            this.Products = ko.observableArray();

            this.addToChart = function (data) {
                alert(data.productName);
            };

            //:MainCat/:MainCatId(/:ActCat/:ActCatID)
            this.activate = function (MainCat, MainCatId, ActCat, ActCatID) {

                sys.log("MainCat");
                sys.log(MainCat);
                sys.log("ActCat");
                sys.log(ActCat);

                sys.log("MainCatId");
                sys.log(MainCatId);
                sys.log("ActCatID");
                sys.log(ActCatID);


                that.initProducts(MainCatId, ActCatID);
                that.refreshBreadCrumb();

            };

            this.initProducts = function (MainCatId, ActCatID) {
                var prods = null;
                if (!isNullOrUndefined(ActCatID)) {
                    prods = that.getProductsOfProductTypeId(ActCatID);
                } else if (!isNullOrUndefined(MainCatId)) {
                    prods = that.getProductsOfProductTypeId(MainCatId);
                } else {
                    prods = that.getAllProducts();
                }

                sys.log(prods);

                that.Products(prods);
            };

            this.getProductsOfProductTypeId = function (id) {
                return productController.getProductsByType(id);
            };

            this.getAllProducts = function () {
                return productController.getAllProducts();
            };

            this.refreshBreadCrumb = function () {
                //breadcrumb.productTypeIsLast()
                //breadcrumb.breadcrumbs.push({ name: "TTT", isActive: true, link: "#" })
            };

            this.isTestMode = true;
            this.generateTestProducts = function () {
                times = 10;

                for (var i = 0; i < times; i++) {
                    //(productID, productName, creator, price, discountPrice)
                    actual = new product(i, "pname" + i, "creator" + i, 25 * i, 20 * i);

                    that.Products.push(actual);
                }
            };

        };

        return allproducts;
    });