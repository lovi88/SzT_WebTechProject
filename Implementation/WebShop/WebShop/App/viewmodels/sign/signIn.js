define([
    'durandal/system',
    'durandal/app',
    'viewmodels/sign/sign',
    'core/data/user'
], function (sys, app, sign, user) {
    return {

        username: ko.observable(""),
        password: "",
        remember: true,

        signIn: function () {
            try {
                user.signIn(this.username, this.password, this.remember);

                sign.closeWithOK();
            } catch (e) {
                toastr.warning(e);
            }
        },

        activate: function () {

        }
    };
});