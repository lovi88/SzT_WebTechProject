define(
    [
        'durandal/system',
        'durandal/app',
        'viewmodels/navigation/breadcrumb',
        'viewmodels/navigation/sidemenu',
        'viewmodels/cart',
        'plugins/router',
        'busineslogic/productController'
    ],
    function (sys, app, breadcrumb, sidemenu, cart, router, productController) {
        var self

        var allproducts = function () {
            var that = this;

            this.displayName = dict.TranslateText('Welcome to the Lovas WebShop!', 1);
            this.displayToCart = dict.TranslateText('Add to Cart', 1);

            this.Products = ko.observableArray();

            this.addToChart = function (data) {
                cart.addProductToCart(data);

                toast_success_click("Added To Cart: ", data.productName, function () {
                    router.navigate("#Cart");
                });

            };

            //:MainCat/:MainCatId(/:ActCat/:ActCatID)
            this.activate = function (MainCat, MainCatId, ActCat, ActCatID) {
                catId = validId(MainCatId, ActCatID);

                self = this;

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

            filterId = 0;
            initProducts = function (id) {
                filterId = id;
                getProducts();

                //sys.log(prods);
                //that.Products(prods);
            };

            getProducts = function () {
                productController.getAllProducts(productsReadyCallback);
            };
            
            productsReadyCallback = function (ok, data) {
                if (!ok) {
                    return;
                }

                prods = data;

                if (filterId !== 0) {
                    prods.filter(function (elem) {
                        return elem.productTypeID == filterId;
                    });
                }

                self.Products(prods);

                sys.log(prods)
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

            productCreatedCallback = function (ok, data) {
                
            }

            this.generateTestProductsToDB = function () {
                var times = 1;

                for (var i = 0; i < times; i++) {

                    //(productID, productName, creator, price, discountPrice)
                    actual = new product(i, "pname" + i, "creator" + i, 25 * i, 20 * i);

                    productController.createProduct(actual, productCreatedCallback);
                }
            }

        };

        return allproducts;
    });