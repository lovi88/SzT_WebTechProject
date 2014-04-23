define([
        'durandal/system',
        'durandal/app',
        'plugins/dialog',
        'plugins/router'
], function (sys, app, dialog, router) {
    return {

        isModal: false,
        state: "Aborted",

        openAsModal: function (callback) {
            this.isModal = true;

            dialog.show(this).then(function (dialRes) {
                if (typeof (callback) == "function") {
                    callback(dialRes);
                }
            });

        },

        closeWithOK: function () {
            this.state = "OK";

            this.close();
        },

        closeWithAborted: function () {
            this.state = "Aborted";

            this.close();
        },

        close: function () {
            if (this.isModal) {
                this.isModal = false;
                dialog.close(this, this.state);
            }
        },

        activate: function () {

        }
    };
});