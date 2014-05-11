define([
    'durandal/system',
    'durandal/app',
    'viewmodels/sign/sign',
    'core/data/user'
], function (sys, app, sign, user) {
    var self = null;
    return {
        
        username: ko.observable(""),
        password: "",
        remember: true,

        buttonActive: ko.observable(true),
        signIn: function () {
            try {
                user.signIn(this.username, this.password, this.remember, this.signInCallback);
                this.buttonActive(false);
            } catch (e) {
                toastr.warning(e);
            }
        },

        signInCallback: function (isOk) {

            self.buttonActive(true);
            
            if (isOk) {
                toastr.success("Successful Sig In!");
                sign.closeWithOK();
            } else {
                toastr.warning("Unsuccessful Sign In!");
            }
        },

        activate: function () {
            self = this;
        }
    };
});