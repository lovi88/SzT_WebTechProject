function fakeUserController() {
    this.getUser = function (UserName, Password, context) {
        context.getUserFromBLSuccess(new userEntity());
    };

    this.createUser = function (email, username, pass, passagain, context) {
        ent = new userEntity();
        ent.profile_data.name = username;
        context.signUpSuccess();
    };

    this.modifyUser = function (user, context) {
        context.saveUserModificationsSuccess(user);
    };

    //this.modifyUserPass = function (user_id, pass) {

    //};

    this.deleteUser = function (user) {

    };
}

function fakeProductController() {
    this.getProduct = function (ProductId, callback) {
        prod = new product(ProductId, "teszt_" + ProductId, "CreatorPista", 50, 25, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png");
        callback(true, prod);
    };

    this.getAllProducts = function (callback) {
        pds = [];
        for (var i = 0; i < 15; i++) {
            pds.push(new product(i, "tesztAllProd" + i, "CreatorPista" + i, 50 * i, 25 * i, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png"));
        }

        callback(true, pds);
        
    };

    this.getProductsByType = function (ProductTypeId) {
        pds = [];
        for (var i = 0; i < 15; i++) {
            pds.push(new product(i, "t" + i + " Type:" + ProductTypeId, "CreatorPista" + i, 50 * i, 25 * i, "http://www.clipartsfree.net/vector/medium/18177-tv-test-screen-art-design.png"));
        }

        return pds;
    };

    this.createProduct = function (product) {

    };

    this.modifyProduct = function (product) {

    };

    this.deleteProduct = function (product) {

    };
}
