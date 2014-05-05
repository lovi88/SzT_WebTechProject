define(
    [
        'durandal/system',
        'durandal/app',
        'core/data/user'
    ], function (sys, app, user) {
        return {

            availableCountries: ko.observableArray(['Hungary', 'France', 'Germany', 'Spain']),
            selectedCountry: ko.observable(),
            city: ko.observable(),
            zip_code: ko.observable(),
            road_num: ko.observable(),

            activate: function () {
                this.initFromUser();
            },

            initFromUser: function () {
                ba = user.billing_address;

                this.selectedCountry(ba.country);
                this.city(ba.city);
                this.zip_code(ba.zip_code);
                this.road_num(ba.road_num);

            },

            saveChanges: function () {
                ba = user.billing_address;
                
                ba.country = this.selectedCountry();
                ba.city = this.city();
                ba.zip_code = this.zip_code();
                ba.road_num = this.road_num();

                toastr.info("Your changes has been saved.");
            },

            cancelChanges: function () {
                this.initFromUser();

                toastr.info("Your changes has been dropped.");
            }

        };
    });