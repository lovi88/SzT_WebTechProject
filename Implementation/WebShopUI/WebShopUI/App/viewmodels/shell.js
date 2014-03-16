﻿define(['plugins/router', 'durandal/app', 'durandal/system', "viewmodels/customModal"], function (router, app, sys, modal) {

    var self = this;

    function ProductType(mainType, parentType, typeName, typeId, productCount, subTypes) {
        this.mainType = mainType;
        this.parentType = parentType;
        this.typeName = typeName;
        this.typeId = typeId;
        this.productCount = productCount;
        this.subTypes = subTypes;

        this.hash = 
          "#Products/" + this.mainType + "/" + this.typeName + "/" + this.typeId;
        
    }


    var subs1 = [
        {
            parentType:1,
            typeName: dict.TranslateText("Adatbázis - kezelés", 0),
            typeId: 2,
            productCount : 70
        },
        {
            parentType: 1,
            typeName: dict.TranslateText("Általános ismeretek", 0),
            typeId: 3,
            productCount: 80
        },
        {
            parentType: 1,
            typeName: dict.TranslateText("Felhasználói programok", 0),
            typeId: 4,
            productCount: 80
        },
        {
            parentType: 1,
            typeName: dict.TranslateText("Hardver", 0),
            typeId: 5,
            productCount: 80
        },
        {
            parentType: 1,
            typeName: dict.TranslateText("Internet, hálózatok", 0),
            typeId: 6,
            productCount: 10
        },
        {
            parentType: 1,
            typeName: dict.TranslateText("Operációs rendszerek", 0),
            typeId: 7,
            productCount: 15
        },
        {
            parentType: 1,
            typeName: dict.TranslateText("Programozás, fejlesztés", 0),
            typeId: 8,
            productCount: 150
        },
        {
            parentType: 1,
            typeName: dict.TranslateText("További könyveink", 0),
            typeId: 9,
            productCount: 500
        }
    ];

    var subs = [];

    subs.push(new ProductType("Books", "Books", "Adatbázis - kezelés", 2, 18, null));

    sys.log(subs);

    var parent = new ProductType(
        "Books",
        { typeId: 0 },
        dict.TranslateText("Könyv", 0),
        1,
        null
    );

    var active = new ProductType("Books",parent, dict.TranslateText("Számítástechnika, Internet", 0), 2, 1500, subs);

    return {
        router: router,
        user: {
            userName : "Pista",
            authenticated : true
        },
        activeType: active,
        newType: function() {
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
        modifyType: function(productType) {
            //app.showMessage('mock...');

            //app.productType("asd").then(function (dialogResult) {
            //    // use dialogResult.checkedValue here
            //});
            //("message", "title", ["y", "n"])

            app.showDialog(new modal({title:"alma"}));

            

        },
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title: 'Home', moduleId: 'viewmodels/products', nav: true },
                { route: 'Product/:productName/:ProductId',moduleId: 'viewmodels/product', nav: false },
                { route: 'Products', moduleId: 'viewmodels/products', nav: false },
                { route: 'Products/:MainCat(/:ActCat/:ActCatID)', moduleId: 'viewmodels/products', nav: false },
                { route: 'Products/Books', title: 'Books', moduleId: 'viewmodels/products', nav: true },
                { route: 'Products/Antique', title: 'Antique', moduleId: 'viewmodels/products', nav: true },
                { route: 'Products/Movies', title: 'Movies', moduleId: 'viewmodels/products', nav: true },
                { route: 'Products/Music', title: 'Music', moduleId: 'viewmodels/products', nav: true }
            ]).buildNavigationModel();
            
            
            return router.activate();
        }
    };
});