define(
    [
        'durandal/system',
        'durandal/app',
        'core/data/user'
    ], function (sys, app, user) {
        return {
            full_name: ko.observable(),
            e_mail: ko.observable(),
            actual_password: ko.observable(),
            new_password: ko.observable(),
            new_password_again: ko.observable(),
            birth_date: ko.observable(),

            activate: function () {
                this.initFromUser();
            },

            initFromUser: function () {
                pd = user.profile_data;

                this.full_name(pd.name());
                this.e_mail(pd.email);
                this.birth_date(pd.birthDate);

                this.resetPassFields();
            },

            resetPassFields: function () {
                this.actual_password("");
                this.new_password("");
                this.new_password_again("");
            },

            saveChanges: function () {
                try {

                    this.savePass();
                    this.resetPassFields();

                    this.saveNameEmailBirth();

                    toastr.info("Your changes has been saved.");

                } catch (ex) {
                    toastr.warning(ex);
                }
            },

            savePass: function () {
                if (this.isPassChanged()) {

                    user.savePass(
                        this.actual_password(),
                        this.new_password(),
                        this.new_password_again()
                    );
                }
            },

            isPassChanged: function () {
                act_is_empty = isNullOrUndefinedOrEmpty(this.actual_password());
                new_is_empty = isNullOrUndefinedOrEmpty(this.new_password());

                if (act_is_empty && new_is_empty) {
                    return false;
                }

                return true;
            },

            saveNameEmailBirth: function () {
                pd = user.profile_data;

                pd.name(this.full_name());
                pd.email = this.e_mail();
                pd.birthDate = this.birth_date();
            },

            cancelChanges: function () {
                this.initFromUser();

                toastr.info("Your changes has been dropped.");
            }

        };
    });