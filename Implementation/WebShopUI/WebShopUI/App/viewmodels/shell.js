define(['durandal/app', 'durandal/system'],
    function (app, sys) {

    return {
        activate: function () {
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