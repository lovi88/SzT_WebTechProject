define([
    'durandal/app',
    'durandal/system',
    'core/data/user'
],function (app, sys, user) {

    return {
        activate: function () {
            user.reinitFromStore();
            toastrOptionInit();

            //test
            sys.log(user.isAuthenticated())

        },
        activeMainType: null,
        activeSideType: null,
        changeMainType: function (type) {
            this.activeMainType = type;
            this.activeSideType = null;
        }
    };
});