define(
    [
        'durandal/system',
        'durandal/app',
        'viewmodels/mainmenu',
        'busineslogic/productTypeController',
        'busineslogic/productController'
    ],
    function (sys, app, mainmenu, productTypeController, productController) {
       
        return {
            activeType: null,
            activeTypeName: ko.observable(),
            activeTypeHash: ko.observable(),

            parentType: null,
            parentTypeName: ko.observable(),
            parentTypeHash: ko.observable(),

            childTypes: ko.observableArray(),

            setActiveTypeById: function (activeTypeId) {

                this.reinitActive(activeTypeId);
                this.reinitParent();
                this.reinitChildren(activeTypeId);
            },

            reinitActive: function (activeTypeId) {
                at = this.getTypeById(activeTypeId);

                this.activeType = at;
                this.activeTypeName(at.typeName);
                this.activeTypeHash(at.hash);
            },

            reinitParent: function () {
                pi = this.activeType.parentType;
                pt = this.getTypeById(pi);

                this.parentType = pt;
                this.parentTypeName(pt.typeName);
                this.parentTypeHash(pt.hash);
            },

            reinitChildren: function (activeTypeId) {
                this.childTypes(this.getChildTypes(activeTypeId));
            },

            getTypeById: function (id) {
                return productTypeController.getProductType(id);
            },

            getChildTypes: function (id) {
                return productTypeController.getChildProductTypes(id);
            },

            activate: function () {

            },

            newType: function () {
                app.showMessage('mock...');
            },

            deleteType: function (t) {
                var message = "Biztos törli: " + t.typeName + "? (mock, nem működik)";
                message = dict.TranslateText(message, 0);

                var title = dict.TranslateText("Terméktípus törlése", 0);

                var options = [
                    dict.TranslateText("Yes", 1),
                    dict.TranslateText("No", 1)
                ];

                app.showMessage(message, title, options).then(function (dialogResult) {
                    sys.log(dialogResult);
                });
            },
            modifyType: function (productType) {
                //app.showMessage('mock...');

                //app.productType("asd").then(function (dialogResult) {
                //    // use dialogResult.checkedValue here
                //});
                //("message", "title", ["y", "n"])

                app.showDialog(new modal({ title: "alma" }));

            },

        };
    });