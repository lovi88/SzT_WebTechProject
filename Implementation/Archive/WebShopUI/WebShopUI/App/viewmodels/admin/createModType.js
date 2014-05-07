define([
    'durandal/system',
    'durandal/app',
    'plugins/dialog',
], function (sys, app, dialog) {
    return {
        activate: function () {

        },

        close: function () {
            dialog.close(this, this.state);
        },

        openAsModal: function (callback) {
            dialog.show(this).then(function (dialRes) {
                if (typeof (callback) == "function") {
                    callback(dialRes);
                }
            });
        },
    };
});