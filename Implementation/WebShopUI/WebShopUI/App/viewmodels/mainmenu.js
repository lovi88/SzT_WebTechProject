define(['durandal/system', 'durandal/app', 'plugins/router', 'busineslogic/productTypeController'], function (sys, app, router, productTypeController) {

    var routes = [
                { route: ['','#','Home'], title: 'Home', moduleId: 'viewmodels/products', nav: true },
                { route: 'Product/:productName/:ProductId', moduleId: 'viewmodels/product', nav: false },
                { route: 'Products', moduleId: 'viewmodels/products', nav: false },
                { route: 'Sign', moduleId: 'viewmodels/signIn', nav: false }

    ];

    function genMainMenuRootTypes () {
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

    function genMainMenuDefaults() {
        routes.push({ route: 'Products/:MainCat/:MainCatId(/:ActCat/:ActCatID)', moduleId: 'viewmodels/products', nav: false });
    }

    return {
        router: router,
        user: {
            userName: "Pista",
            authenticated: false
        },

        search: function () {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },

        activate: function () {
            sys.log("mainMenu");

            genMainMenuRootTypes();
            genMainMenuDefaults();

            router.map(routes)
                .buildNavigationModel()
                .mapUnknownRoutes('#', 'not-found');

            sys.log(router.navigationModel);

            return router.activate();
        }

    };
});