define([
    'durandal/system',
    'durandal/app',
    'viewmodels/sign/sign',
    'core/data/user'
], function (sys, app, sign, user) {
    return {
        email: "",
        username: "",

        password: "",
        password_again: "",

        humanity: "robot",

        signUp: function () {
            
            if (this.humanity != "human") {
                toastr.warning("To register, you must be a human");
                return;
            }

            try {
                user.signUp(this.email, this.username, this.password, this.password_again);

                sign.closeWithOK();
            } catch (e) {
                toastr.warning(e);
            }

        },

        activate: function () {

        }
    };
});