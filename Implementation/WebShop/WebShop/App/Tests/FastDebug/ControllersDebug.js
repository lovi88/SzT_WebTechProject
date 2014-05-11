function UserControlDebug() {

    this.GetUsr = function () {
        var c = require('busineslogic/UserController');

        c.getUser('p', 'p');
    };

    this.createUsr = function () {
        var c = require('busineslogic/UserController');

        c.createUser('p@p.com', 'p', 'p', 'p');

    };
    
    this.modifyUsr = function () {
        var c = require('busineslogic/UserController');

    };

}

var u = new UserControlDebug();