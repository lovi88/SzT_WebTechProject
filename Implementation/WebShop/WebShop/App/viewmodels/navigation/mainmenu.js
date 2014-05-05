define([
        'durandal/system',
        'durandal/app',
        'plugins/router',
        'viewmodels/cart',
        'core/data/user',
        'busineslogic/productTypeController'
], function (sys, app, router, cart, user, productTypeController) {

    var routes = [
                { route: ['', '#', 'Home'], title: 'Home', moduleId: 'viewmodels/products', nav: true },
                { route: 'Product/:productName/:ProductId', moduleId: 'viewmodels/product', nav: false },
                { route: 'Products', moduleId: 'viewmodels/products', nav: false },
                { route: 'Sign', moduleId: 'viewmodels/sign/sign', nav: false },
                { route: 'Profile', moduleId: 'viewmodels/profile/profile', nav: false },
                { route: 'Cart', moduleId: 'viewmodels/cart', nav: false },
                { route: 'Ordering', moduleId: 'viewmodels/ordering/ordering', nav: false }

    ];

    function genMainMenuRootTypes() {
        rootTypes = productTypeController.getRootProductTypes();

        for (var key in rootTypes) {
            tname = rootTypes[key].typeName;
            tid = rootTypes[key].typeId;

            var r = {
                route: 'Products/' + tname + '/' + tid,
                title: tname,
                moduleId: 'viewmodels/products',
                nav: true
            };

            routes.push(r);
        }

    }

    //router.guardRoute = function (routeInfo, params, instance) {
    //    //if ordering and cart.products.lengtd == 0
    //          return false;

    //};

    function genMainMenuDefaults() {
        routes.push({ route: 'Products/:MainCat/:MainCatId(/:ActCat/:ActCatID)', moduleId: 'viewmodels/products', nav: false });
    }

    return {
        router: router,

        cart_prods: cart.products,
        cart_checkout: function () {
            cart.checkoutCart();
        },

        userName: user.profile_data.name,
        authenticated: user.isAuthenticated,
        signOut: function () {
            user.signOut();
        },

        search: function () {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },

        activate: function () {

            genMainMenuDefaults();
            genMainMenuRootTypes();

            router.map(routes)
                .buildNavigationModel()
                .mapUnknownRoutes('viewmodels/viewnotfound', 'not-found');

            return router.activate();
        },

        isDebug: false,
        debug: function () {
            sys.log("mainMenu");

            sys.log(ko.toJSON(user.isAuthenticated));
        }
    };
});