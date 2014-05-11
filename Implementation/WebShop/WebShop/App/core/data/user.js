define([
    'durandal/system',
    'durandal/app',
    'busineslogic/UserController'
], function (sys, app, UserController) {
    return {

        UId: 1,
        UnicIdentifier: 32,

        isAuthenticated: ko.observable(false),
        isAdmin: ko.observable(true),

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
            delivery_method: "shipping",
            selectedStore: "",
            delivery_price: "80"
        },

        savePass: function (old_ps, newpass, newpsagain) {
            check.ifEmptyThrow(old_ps, "Jelszó módosításnál meg kell adnia eredeti jelszavát");
            check.ifEmptyThrow(newpass, "Jelszó módosításnál az új jelszava nem lehet üres");
            check.ifEmptyThrow(newpsagain, "A jelszavát meg kell ismételnie");

            check.ifPassAndPassAgainisNotSameThrow(newpass, newpsagain, "A két jelszó nem egyezik meg");

            UserController.modifyUserPass(this.UId, newpass);
        },

        signIn: function (user_name, pass, remember) {

            check.ifEmptyThrow(user_name, "username can't be empty!");
            check.ifEmptyThrow(pass, "password can't be empty!");

            var user = this.getUserFromBL(user_name, pass);

            this.saveUserToStore(user, remember);

            this.refresFromUserData(user);
        },

        getUserFromBL: function (user_name, pass) {
            var user = UserController.getUser(user, pass);

            if (isNullOrUndefinedOrEmpty(user)) {
                throw "wrong username or password";
            }

            return user;
        },

        saveUserToStore: function (user, remember) {

            if (remember) {
                amplify.store("user", user);
            } else {
                amplify.store("user", user, { expires: 7200000 });
            }
        },

        reinitFromStore: function () {
            
            var user = amplify.store("user");

            if (!check.isempty(user)) {

                this.refresFromUserData(user);
            }

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

            usr = UserController.createUser(email, username, pass, passagain);

            this.refresFromUserData(usr);
        },

        checkEmailUsernamePassPassagain: function (email, username, pass, passagain) {
            check.ifEmptyThrow(email, "email can't be empty!");
            check.ifIsNotEmailThrow(email, "You must enter a valid e-mail");

            check.ifEmptyThrow(username, "username can't be empty!");
            check.ifEmptyThrow(pass, "password can't be empty!");
            check.ifEmptyThrow(passagain, "you have to retype your password");

            check.ifPassAndPassAgainisNotSameThrow(pass, passagain, "the two password is not same");
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

            amplify.store("user", null);
        }
    };
});