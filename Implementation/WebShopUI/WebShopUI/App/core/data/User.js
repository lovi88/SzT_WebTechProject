define(function (require) {
    return {

        UId: 1,

        profile_data: {
            name: "Lovas István",
            email: "l.pista@example.com",
            birthDate: "1988.03.20"
        },

        delivery_address: {
            country: "Hungary",
            city: "Budapest",
            zip_code: 1111,
            road_num: "Delivery str. 80"
        },

        billing_address: {
            country: "Hungary",
            city: "Budapest",
            zip_code: 1111,
            road_num: "Billing str. 80"
        },

        preferred_delivery: {
            delivery_method: "personal",
            selectedStore: "bp. 2. sz üzlet",
        },

        isAuthenticated: false,
        isAdmin: false,

        savePass: function (old_ps, newps, newpsagain) {
            this.passCheck(old_ps, newps, newpsagain);


        },

        passCheck: function (old_ps, newps, newpsagain) {
            if (newps != newpsagain) {
                throw "A két pass nem egyezik meg";
            }

            if (isNullOrUndefinedOrEmpty(old_ps)) {
                throw "Jelszó módosításnál meg kell adnia eredeti jelszavát";
            }

            if (isNullOrUndefinedOrEmpty(newps)) {
                throw "Jelszó módosításnál az új jelszava nem lehet üres";
            }

            if (isNullOrUndefinedOrEmpty(newpsagain)) {
                throw "A jelszavát meg kell ismételnie";
            }

        }

    };
});