define(
    [
        'durandal/system',
        'durandal/app',
        'viewmodels/breadcrumb',
        'viewmodels/sidemenu',
        'busineslogic/productController'
    ],
    function (sys, app, breadcrumb, sidemenu, productController) {

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
                catId = validId(MainCatId, ActCatID);

                initProducts(catId);
                refreshBreadCrumb(catId);
                refresSideMenu(catId);
                
            };

            validId = function (MainCatId, ActCatID) {
                if (!isNullOrUndefined(ActCatID)) {
                    return ActCatID;
                } else if (!isNullOrUndefined(MainCatId)) {
                    return MainCatId;
                } else {
                    return 0;
                }
            };

            initProducts = function (id) {
                var prods = [];

                if (id === 0) {
                    prods = getAllProducts();
                } else {
                    prods = getProductsOfProductTypeId(id);
                }

                sys.log(prods);

                that.Products(prods);
            };

            getAllProducts = function () {
                return productController.getAllProducts();
            };

            getProductsOfProductTypeId = function (id) {
                return productController.getProductsByType(id);
            };

            refreshBreadCrumb = function (catId) {
                //breadcrumb.productTypeIsLast()
                //breadcrumb.breadcrumbs.push({ name: "TTT", isActive: true, link: "#" })
            };

            refresSideMenu = function (catId) {
                sidemenu.setActiveTypeById(catId);
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