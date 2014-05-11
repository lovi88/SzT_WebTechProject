//var u = require('core/data/user')
//var c = require('busineslogic/UserController')

define(['durandal/system'], function (sys) {
    return {
        getUser: function (UserEmail,UserName, Password) {
            
            //GetUserByNamePass
            alert("get user");
            
            amplify.request({
                resourceId: "GetUserByNamePass",
                data: {
                    Email: UserEmail,
                    Name: UserName,
                    Pass: Password
                },
                success: function (data) {
                    alert(data);
                },
                error: function (data) {
                    alert(data);
                }

            });
        },

        createUser: function (email, username, pass, passagain) {
            alert("create user");

            amplify.request({
                resourceId: "CreateUser",
                data: {
                    Email: email,
                    Name: username,
                    PasswordHash: pass
                },
                success: function (data) {
                    alert("succ");
                    sys.log(data)
                },
                error: function (data) {
                    alert("fail");

                    sys.log(data)
                }

            });
        },

        modifyUser: function (user) {
            alert("mod user");

            amplify.request("ModifyUser",
                {
                    id: user.Uid
                },

                function (data) {

                }
            );
        },

        deleteUser: function (user) {

            alert("del user");

            amplify.request("DeleteUser", { id: user.Uid }, function (data) {
                alert("User Deleted");
            });
        },

        serverUserToJsUser: function (svUser) {

            jsUser = new userEntity();

            jsUser.uid = svUser.UId;
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

            svUser.UId = jsUser.uid;
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

            return svUser;
        }

        //modifyUserPass: function (user_id, pass) {},
    };
});