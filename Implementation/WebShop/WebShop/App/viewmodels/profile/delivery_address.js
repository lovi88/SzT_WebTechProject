define(
    [
        'durandal/system',
        'durandal/app',
        'core/data/user'
    ], function (sys, app, user) {
    return {

        availableCountries: ko.observableArray(['Hungary','France', 'Germany', 'Spain']),
        selectedCountry: ko.observable(),
        city: ko.observable(),
        zip_code: ko.observable(),
        road_num: ko.observable(),

        activate: function () {
            this.initFromUser();
        },

        initFromUser: function () {
            da = user.delivery_address;

            this.selectedCountry(da.country);
            this.city(da.city);
            this.zip_code(da.zip_code);
            this.road_num(da.road_num);

        },

        saveChanges: function () {
            da = user.delivery_address;

            da.country = this.selectedCountry();
            da.city = this.city();
            da.zip_code = this.zip_code();
            da.road_num = this.road_num();

            toastr.info("Your changes has been saved.");
        },

        cancelChanges: function () {
            this.initFromUser();

            toastr.info("Your changes has been dropped.");
        }

    };
});