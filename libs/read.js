var fs = require('fs');
var users = require('../data/users.json');

function readUsers(id) {
    return new Promise(function (resolve, reject) {
        let user = users.filter(user => user.id == id)[0];
        delete user['password'];
        resolve(user);
        reject('the ID doesn\'t exist');
    })
}
module.exports = readUsers;