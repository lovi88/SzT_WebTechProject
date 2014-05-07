/// <reference path="../../viewmodels/admin/createNewProduct.js" />
/// <reference path="../../.js" />
/// <reference path="../../.js" />
define([
    'durandal/system',
    'durandal/app',
    'viewmodels/admin/createModProduct',
    'viewmodels/admin/createModType',
    'viewmodels/admin/importProductsFromCSV'

], function (sys, app, createModProduct, createModType, importProductsFromCSV) {
    return {
        activate: function () {
            alert("admin");
        },

        newProduct: function () {
            alert('newPr');
        },

        newType: function () {
            alert("newT");
        },

        modifyType: function () {
            alert("modT");
        },

        deleteType: function (type) {
            alert("del");

            var message = "Biztos törli: " + type.typeName + "? (mock, nem működik)";
            message = dict.TranslateText(message, 0);

            var title = dict.TranslateText("Terméktípus törlése", 0);

            var options = [
                "Yes",
                "No"
            ];
            
            app.showMessage(message, title, options).then(function (dialogResult) {
                if (dialogResult == options[0]) {
                    alert("juppi")
                }
            });
        }

    };
});