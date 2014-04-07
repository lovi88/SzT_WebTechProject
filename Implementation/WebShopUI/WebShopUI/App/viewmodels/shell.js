define(['durandal/app', 'durandal/system', "viewmodels/customModal"],
    function (app, sys, modal) {

    return {
        activate: function () {
            
        },
        activeMainType: null,
        activeSideType: null,
        changeMainType: function (type) {
            this.activeMainType = type;
            this.activeSideType = null;
        }
    };
});