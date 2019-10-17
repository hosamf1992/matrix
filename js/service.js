'use strict'

var gUsers = createUsers();
var gFilterBy = 'Name';


function doLogin(userName, password) {

    var getUser = gUsers.find(function (user) {

        return user.userName === userName && user.password === password

    })
    if (getUser) return getUser
    else return null;

}





function saveUser(user) {
    // update the local storage
    user.lastLogin = Date.now();
    localStorage.setItem(user.userName, JSON.stringify(user));
    localStorage.setItem('indexName', user.userName);


}



function createUsers() {
    return [
        createUser('Muki', '1234', true),
        createUser('Puki', '1234', false),
        createUser('David', '0000', false),
        createUser('Gadi', 'aa', true),
        createUser('Sam', '1234', false)

    ]
}

function createUser(userName, password, isAdmin) {
    return {
        userName: userName,
        password: password,
        lastLogin: 0,
        isAdmin: isAdmin

    }
}

function getIndexNameStorage() {
    var name = localStorage.getItem('indexName');
    return name;

}


function isAdmin(name) {


    var isAdmin = gUsers.some(function (user) {

        return (user.userName === name && user.isAdmin === true)

    });

    return isAdmin;


}

function sortByName() {
    gUsers.sort((a, b) => (a.userName > b.userName) ? 1 : -1)
    return gUsers;

}
function sortByLogin() {
    gUsers.sort((a, b) => (a.lastLogin < b.lastLogin) ? 1 : -1)
    return gUsers;

}

function updateModalLoginTime() {

    var keys = [];
    //get all keys from localStorage
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === 'indexName') continue;
        keys.push(localStorage.getItem(localStorage.key(i)));

    }
    // convert to object
    var users = keys.map(function (key) {
        return JSON.parse(key);
    });

    // update  lastLogin in modal
    users.forEach(function (key) {

        gUsers.find(function (user) {
            if (key.userName === user.userName) return user.lastLogin = key.lastLogin;


        });

    });

    // return users;
}