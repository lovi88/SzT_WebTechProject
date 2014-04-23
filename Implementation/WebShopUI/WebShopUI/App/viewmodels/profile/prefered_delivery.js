define(
    [
        'durandal/system',
        'durandal/app',
        'core/data/user'
    ], function (sys, app, user) {
    return {
        //personal | shipping
        delivery_method: ko.observable("shipping"),

        avaibleStores: ko.observableArray(["bp. 1. sz üzlet", "bp. 2. sz üzlet"]),
        selectedStore: ko.observable(),

        activate: function () {
            this.initFromUser();
        },

        initFromUser: function () {
            pd = user.preferred_delivery;

            this.delivery_method(pd.delivery_method);
            this.selectedStore(pd.selectedStore);

        },

        saveChanges: function () {
            pd = user.preferred_delivery;

            pd.delivery_method = this.delivery_method();
            pd.selectedStore = this.selectedStore();

            toastr.info("Your changes has been saved.");
        },

        cancelChanges: function () {
            this.initFromUser();

            toastr.info("Your changes has been dropped.");
        }

    };
});