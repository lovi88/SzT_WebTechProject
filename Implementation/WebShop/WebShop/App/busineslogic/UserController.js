//var u = require('core/data/user')
//var c = require('busineslogic/UserController')

define(['durandal/system'], function (sys) {

    if (fakeControllers) {
        return new fakeUserController();
    }

    return {
        getUser: function (UserName, Password, context) {
            
            var that = this;
            //GetUserByNamePass
            amplify.request({
                resourceId: "GetUserByNamePass",
                data: {
                    Name: UserName,
                    PasswordHash: Password
                },
                success: function (data) {
                    context.getUserFromBLSuccess(that.serverUserToJsUser(data));
                },
                error: function (data) {
                    sys.log(data);
                    context.getUserFromBLFail(data);
                }
            });
        },

        createUser: function (email, username, pass, passagain, context) {
            var that = this;

            amplify.request({
                resourceId: "CreateUser",
                data: {
                    Email: email,
                    Name: username,
                    PasswordHash: pass
                },
                success: function (data) {
                    context.signUpSuccess(that.serverUserToJsUser(data));
                },
                error: function (data) {
                    context.signUpProblem(data);
                }

            });
        },

        modifyUser: function (user, context) {
            var that = this;

            var svUsr = that.jsUserToServerUser(user);

            svUser.id = user.Uid;

            sys.log("svUser");
            sys.log(svUser);

            amplify.request({
                resourceId: "ModifyUser",
                data: svUser,
                success: function (data) {
                    context.saveUserModificationsSuccess(data);
                },
                error: function (data) {
                    context.saveUserModificationsFail(data);
                }

            });
        },

        deleteUser: function (user) {
            amplify.request("DeleteUser", { id: user.Uid }, function (data) {
                toastr.info("User Deleted");
            });
        },

        serverUserToJsUser: function (svUser) {

            jsUser = new userEntity();

            jsUser.UId = svUser.UId;
            jsUser.isAdmin = svUser.IsAdmin;

            jsUser.profile_data.name = svUser.Name;
            jsUser.profile_data.email = svUser.Email;
            jsUser.profile_data.birthDate = svUser.BirthDate;

            jsUser.delivery_address.country = svUser.DeliveryCountry;
            jsUser.delivery_address.city = svUser.DeliveryCity;
            jsUser.delivery_address.zip_code = svUser.DeliveryZipCode;
            jsUser.delivery_address.road_num = svUser.DeliveryRoadNum;

            jsUser.billing_address.country = svUser.BillingCountry;
            jsUser.billing_address.city = svUser.BillingCity;
            jsUser.billing_address.zip_code = svUser.BillingZipCode;
            jsUser.billing_address.road_num = svUser.BillingRoadNum;

            jsUser.preferred_delivery.delivery_method = svUser.DeliveryMethod;
            jsUser.preferred_delivery.selectedStore = svUser.SelectedStore;
            jsUser.preferred_delivery.delivery_price = svUser.DeliveryPrice;

            return jsUser;
        },

        jsUserToServerUser: function (jsUser) {
            svUser = new serverUser();

            svUser.UId = jsUser.UId;
            svUser.IsAdmin = jsUser.isAdmin;

            svUser.Name = jsUser.profile_data.name;
            svUser.Email = jsUser.profile_data.email;
            svUser.BirthDate = jsUser.profile_data.birthDate;

            svUser.DeliveryCountry = jsUser.delivery_address.country;
            svUser.DeliveryCity = jsUser.delivery_address.city;
            svUser.DeliveryZipCode = jsUser.delivery_address.zip_code;
            svUser.DeliveryRoadNum = jsUser.delivery_address.road_num;

            svUser.BillingCountry = jsUser.billing_address.country;
            svUser.BillingCity = jsUser.billing_address.city;
            svUser.BillingZipCode = jsUser.billing_address.zip_code;
            svUser.BillingRoadNum = jsUser.billing_address.road_num;

            svUser.DeliveryMethod = jsUser.preferred_delivery.delivery_method;
            svUser.SelectedStore = jsUser.preferred_delivery.selectedStore;
            svUser.DeliveryPrice = jsUser.preferred_delivery.delivery_price;

            svUser.PasswordHash = jsUser.passHash;

            return svUser;
        }

        //modifyUserPass: function (user_id, pass) {},
    };
});