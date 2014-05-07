/// <reference path="../../core/admin/admin.js" />
define(
    [
        'require',
        'durandal/system',
        'durandal/app',
        'viewmodels/navigation/mainmenu',
        'core/data/user',
        'busineslogic/productTypeController',
        'busineslogic/productController'
],
function (require, sys, app, mainmenu, user, productTypeController, productController) {
    var admin = null;
    
    if (user.isAdmin()) {
        require(['core/admin/admin'], function (adm) {
            admin = adm;
        });
    }

    return {
        activeType: null,
        activeTypeName: ko.observable(),
        activeTypeHash: ko.observable(),

        parentType: null,
        parentTypeName: ko.observable(),
        parentTypeHash: ko.observable(),

        childTypes: ko.observableArray(),

        isAdmin: user.isAdmin,

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
            this.setActiveTypeById(0);
        },

        newProd: function () {
            admin.newProduct();
        },

        newType: function () {
            admin.newType();
        },

        deleteType: function (t) {
            admin.deleteType(t)
        },

        modifyType: function (productType) {

            admin.modifyType();
            //app.showMessage('mock...');

            //app.productType("asd").then(function (dialogResult) {
            //    // use dialogResult.checkedValue here
            //});
            //("message", "title", ["y", "n"])

            //app.showDialog(new modal({ title: "alma" }));

        }

    };
});