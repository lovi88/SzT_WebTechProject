define([
    'durandal/system',
    'durandal/app',
    'viewmodels/sign/sign',
    'core/data/user'
], function (sys, app, sign, user) {
    var self = null;
    return {
        email: "",
        username: "",

        password: "",
        password_again: "",

        humanity: "robot",

        buttonActive: ko.observable(true),
        signUp: function () {

            if (this.humanity != "human") {
                toastr.warning("To register, you must be a human");
                return;
            }

            try {
                user.signUp(this.email, this.username, this.password, this.password_again, this.signUpCallback);
                this.buttonActive(false);
            } catch (e) {
                toastr.warning(e);
            }

        },

        signUpCallback: function (isAuth) {
            self.buttonActive(true);
            if (isAuth) {
                toastr.success("Sign Up Succeded!");
                sign.closeWithOK();
            } else {
                toastr.warning("Sign Up Failed!");
            }
        },


        activate: function () {
            self = this;
        }
    };
});