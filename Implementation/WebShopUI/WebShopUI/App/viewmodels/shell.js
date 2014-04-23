define([
    'durandal/app',
    'durandal/system',
    'core/data/user'
],function (app, sys, user) {

    return {
        activate: function () {
            user.reinitFromStore();
            toastrOptionInit();
        },
        activeMainType: null,
        activeSideType: null,
        changeMainType: function (type) {
            this.activeMainType = type;
            this.activeSideType = null;
        }
    };
});