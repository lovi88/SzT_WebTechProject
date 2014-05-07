//User API
amplify.request.define("GetUserByNamePass", "ajax", {
    url: "/api/User/{Name}/{Pass}",
    dataType: "json",
    type: "GET"
});

amplify.request.define("CreateUser", "ajax", {
    url: "/api/User/",
    type: "POST"
});

amplify.request.define("ModifyUser", "ajax", {
    url: "/api/User/{id}",
    dataType: "json",
    type: "PUT"
});

amplify.request.define("DeleteUser", "ajax", {
    url: "/api/User/{id}",
    dataType: "json",
    type: "DELETE"
});
