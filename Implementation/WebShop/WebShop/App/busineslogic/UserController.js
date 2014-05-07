define(['durandal/system'], function (sys) {
    return {
        getUser: function (UserName, Password) {
            //return new userEntity();
            //GetUserByNamePass
            alert("get");
            return

            amplify.request({
                resourceId: "GetUserByNamePass",
                data: {
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
            alert("itt cr");

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

            amplify.request("ModifyUser",
                {
                    id: user.Uid
                },

                function (data) {

                }
            );
        },

        deleteUser: function (user) {

            amplify.request("DeleteUser", function (data) {

            });
        }

        //modifyUserPass: function (user_id, pass) {},
    };
});