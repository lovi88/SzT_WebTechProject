define(['durandal/system', 'durandal/app', 'plugins/router'], function (sys, app, router) {

    var routes = [
                { route: '', title: 'Home', moduleId: 'viewmodels/products', nav: true },
                { route: 'Zebra', title: 'Zebra', moduleId: 'viewmodels/products', nav: true },
                { route: 'Product/:productName/:ProductId', moduleId: 'viewmodels/product', nav: false },
                { route: 'Products', moduleId: 'viewmodels/products', nav: false },
                { route: 'Products/:MainCat/:MainCatId(/:ActCat/:ActCatID)', moduleId: 'viewmodels/products', nav: false }
    ];

    function getMainMenuRootTypes () {
        rootTypes = BusinesLogic.productTypeController.getRootProductTypes();

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

    };

    return {
        router: router,
        user: {
            userName: "Pista",
            authenticated: true
        },

        search: function () {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },


        activate: function () {
            sys.log("mainMenu");

            getMainMenuRootTypes();

            sys.log(routes);

            router.map(routes)
                .buildNavigationModel()
                .mapUnknownRoutes('#', 'not-found');

            sys.log(router.navigationModel)

            return router.activate();
        }
    }
});