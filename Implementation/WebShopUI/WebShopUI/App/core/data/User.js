define([
    'durandal/system',
    'durandal/app',
    'busineslogic/UserController'
], function (sys, app, UserController) {
    return {

        UId: 1,

        isAuthenticated: ko.observable(true),
        isAdmin: ko.observable(false),

        profile_data: {
            name: ko.observable(""),
            email: "",
            birthDate: ""
        },

        delivery_address: {
            country: "",
            city: "",
            zip_code: 0,
            road_num: ""
        },

        billing_address: {
            country: "",
            city: "",
            zip_code: 0,
            road_num: ""
        },

        preferred_delivery: {
            delivery_method: "",
            selectedStore: "",
        },

        check: {

            isempty: function (param) {
                return isNullOrUndefinedOrEmpty(param);
            },

            ifEmptyThrow: function (param, message) {
                if (this.isempty(param)) {
                    throw message;
                }
            },

            passPassAgainisSame: function (pass, passAgain) {
                return pass == passAgain;
            },

            ifPassAndPassAgainisNotSameThrow: function (pass, passAgain, message) {
                if (this.passPassAgainisSame(pass, passAgain)) {
                    throw message;
                }
            },

            isEmail: function (email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
            },

            ifIsNotEmailThrow: function (email, message) {
                if (!this.isEmail(email)) {
                    throw message;
                }
            }
        },

        savePass: function (old_ps, newpass, newpsagain) {
            this.check.ifEmptyThrow(old_ps, "Jelszó módosításnál meg kell adnia eredeti jelszavát");
            this.check.ifEmptyThrow(newpass, "Jelszó módosításnál az új jelszava nem lehet üres");
            this.check.ifEmptyThrow(newpsagain, "A jelszavát meg kell ismételnie");

            this.check.ifPassAndPassAgainisNotSameThrow(newpass, newpsagain, "A két jelszó nem egyezik meg");

            UserController.modifyUserPass(this.UId, newpass);
        },

        signIn: function (user_name, pass, remember) {

            this.check.ifEmptyThrow(user_name, "username can't be empty!");
            this.check.ifEmptyThrow(pass, "password can't be empty!");

            var user = this.getUserFromBL(user_name, pass);
            this.refresFromUserData(user);
        },

        getUserFromBL: function (user_name, pass) {
            var user = UserController.getUser(user, pass);

            if (isNullOrUndefinedOrEmpty(user)) {
                throw "wrong username or password";
            }

            return user;
        },

        refresFromUserData: function (user) {

            this.UId = user.UId;

            this.isAdmin(user.isAdmin);
            this.isAuthenticated(true);

            this.profile_data.name(user.profile_data.name);
            this.profile_data.email = user.profile_data.email;
            this.profile_data.birthDate = user.profile_data.birthDate;

            this.billing_address = user.billing_address;
            this.preferred_delivery = user.preferred_delivery;
        },

        signUp: function (email, username, pass, passagain) {
            this.checkEmailUsernamePassPassagain(email, username, pass, passagain);

            UserController.createUser(email, username, pass, passagain);

            this.signIn(username, pass);
        },

        checkEmailUsernamePassPassagain: function (email, username, pass, passagain) {
            this.check.ifEmptyThrow(email, "email can't be empty!");
            this.check.ifIsNotEmailThrow(email, "You must enter a valid e-mail");

            this.check.ifEmptyThrow(username, "username can't be empty!");
            this.check.ifEmptyThrow(pass, "password can't be empty!");
            this.check.ifEmptyThrow(passagain, "you have to retype your password");

            this.check.ifPassAndPassAgainisNotSameThrow(pass, passagain, "the two password is not same");
        },

        signOut: function () {
            this.UId = 0;

            this.profile_data.name("");
            this.profile_data.email = "";
            this.profile_data.birthDate = "";

            this.delivery_address = null;
            this.billing_address = null;
            this.preferred_delivery = null;
            this.isAuthenticated(false);
            this.isAdmin(false);
        }
    };
});