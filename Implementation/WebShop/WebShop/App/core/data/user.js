define([
    'durandal/system',
    'durandal/app',
    'busineslogic/UserController'
], function (sys, app, UserController) {
    return {
        
        UId: 1,
        UnicIdentifier: 32,

        isAuthenticated: ko.observable(false),
        isAdmin: ko.observable(false),

        passHash: null,

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

        signInCallback: null,
        remember: null,
        signIn: function (user_name, pass, remember, callback) {

            this.signInCallback = callback;
            this.remember = remember;

            check.ifEmptyThrow(user_name, "username can't be empty!");
            check.ifEmptyThrow(pass, "password can't be empty!");

            this.getUserFromBL(user_name, pass);
        },

        getUserFromBL: function (user_name, pass) {
            UserController.getUser(user_name, pass, this);
        },

        getUserFromBLSuccess: function (user) {
            this.saveUserToStore(user, this.remember);
            this.refresFromUserData(user);

            this.signInCallback(true);
        },

        getUserFromBLFail:function (err_data) {
            sys.log(err_data);

            toastr.warning("wrong username or password");
            
            this.signInCallback(false);

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

        signUpCallback: null,
        signUp: function (email, username, pass, passagain, signUpCallback) {
            this.signUpCallback = signUpCallback;
            this.checkEmailUsernamePassPassagain(email, username, pass, passagain);

            UserController.createUser(email, username, pass, passagain, this);
        },

        signUpSuccess: function (usr) {
            sys.log("mizus?")
            sys.log(usr)

            this.refresFromUserData(usr);
            this.signUpCallback(true);
        },

        signUpProblem: function (data) {
            this.signUpCallback(false);
        },

        checkEmailUsernamePassPassagain: function (email, username, pass, passagain) {
            check.ifEmptyThrow(email, "email can't be empty!");
            check.ifIsNotEmailThrow(email, "You must enter a valid e-mail");

            check.ifEmptyThrow(username, "username can't be empty!");
            check.ifEmptyThrow(pass, "password can't be empty!");
            check.ifEmptyThrow(passagain, "you have to retype your password");

            check.ifPassAndPassAgainisNotSameThrow(pass, passagain, "the two password is not same");
        },

        savePass: function (old_ps, newpass, newpsagain) {
            check.ifEmptyThrow(old_ps, "Jelszó módosításnál meg kell adnia eredeti jelszavát");
            check.ifEmptyThrow(newpass, "Jelszó módosításnál az új jelszava nem lehet üres");
            check.ifEmptyThrow(newpsagain, "A jelszavát meg kell ismételnie");

            check.ifPassAndPassAgainisNotSameThrow(newpass, newpsagain, "A két jelszó nem egyezik meg");

            this.passHash = newpass;

            this.saveUserModifications();
        },

        saveUserModifications: function () {
            UserController.modifyUser(this.asRowUser(), this);

        },

        asRowUser: function () {
            usr = new userEntity();

            for (var attr in this) {
                usr[attr] = this[attr];
            }

            usr.profile_data.name = this.profile_data.name();
            usr.isAdmin = this.isAdmin();

            return usr;
        },

        saveUserModificationsSuccess: function (data) {
            toastr.info("Your changes has been saved.");
        },

        saveUserModificationsFail: function (data) {
            toastr.warning("Your changes has not been saved.");
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