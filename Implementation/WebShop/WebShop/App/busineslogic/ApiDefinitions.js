//User API
amplify.request.define("GetUserByNamePass", "ajax", {
    url: "/api/Users/{Name}/{Pass}",
    dataType: "json",
    type: "GET"
});

amplify.request.define("CreateUser", "ajax", {
    url: "/api/Users/",
    type: "POST"
});

amplify.request.define("ModifyUser", "ajax", {
    url: "/api/Users/{id}",
    dataType: "json",
    type: "PUT"
});

amplify.request.define("DeleteUser", "ajax", {
    url: "/api/Users/{id}",
    dataType: "json",
    type: "DELETE"
});


