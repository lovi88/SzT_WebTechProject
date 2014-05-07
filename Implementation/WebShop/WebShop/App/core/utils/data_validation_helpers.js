function isNullOrUndefined(param) {

    if (param === undefined || param === null) {
        return true;
    }

    return false;
}

function isNullOrUndefinedOrEmpty(param) {
    nu = isNullOrUndefined(param);

    if (nu || param === "") {
        return true;
    }

    return false;
}


var check = {

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
        if (!this.passPassAgainisSame(pass, passAgain)) {
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
}