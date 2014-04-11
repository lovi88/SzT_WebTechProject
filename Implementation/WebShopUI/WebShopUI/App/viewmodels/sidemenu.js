define(['durandal/system', 'durandal/app', 'busineslogic/productTypeController', 'viewmodels/mainmenu'],
    function (sys, app, productTypeController, mainmenu) {

    var subs1 = [
        {
            parentType: 1,
            typeName: dict.TranslateText("Adatbázis - kezelés", 0),
            typeId: 2,
            productCount: 70
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

    var parent = new ProductType(
        "Books",
        { typeId: 0 },
        dict.TranslateText("Könyv", 0),
        1,
        null
    );

    var active = new ProductType("Books", parent, dict.TranslateText("Számítástechnika, Internet", 0), 2, 1500, subs);

    return {
        activeType: active,
        parentType: null,
        setParentType: function (parentType) {
            this.parentType = parentType;
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

        activate: function () {
            
        },

    };
});