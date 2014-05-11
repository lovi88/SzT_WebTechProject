//User API
amplify.request.define("GetUserByNamePass", "ajax", {
    url: "/api/Users/",
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

//Product API
amplify.request.define("GetProduct", "ajax", {
    url: "/api/Products/{id}",
    dataType: "json",
    type: "GET"
});

amplify.request.define("GetAllProduct", "ajax", {
    url: "/api/Products/",
    dataType: "json",
    type: "GET"
});

amplify.request.define("CreateProduct", "ajax", {
    url: "/api/Products/",
    type: "POST"
});

amplify.request.define("ModifyProduct", "ajax", {
    url: "/api/Products/{id}",
    dataType: "json",
    type: "PUT"
});

amplify.request.define("DeleteProduct", "ajax", {
    url: "/api/Products/{id}",
    dataType: "json",
    type: "DELETE"
});