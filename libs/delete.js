var fs = require('fs');

function deleteUser(id){
    return new Promise(function(resolve,reject){
        let objJSON = require('../data/users.json');
        let msg = "Failed update data";
        for (let i in objJSON){
            if (objJSON[i]['id']==id){
                delete objJSON[i];
                msg="Successfully deleted data";
            }
        }
        let result = objJSON.filter(i=>i!==null);
        fs.writeFileSync(
            `./data/users.json`,
            JSON.stringify(result,null,2)
        );
        resolve(msg);
    });
}

function deletePost(id){
    return new Promise(function(resolve,reject){
        let objJSON = require('./data/post.json');
        let msg = "Failed update data";
        for (let i in objJSON){
            if (objJSON[i]['id']==id){
                delete objJSON[i];
                msg="Successfully deleted data";
            }
        }
        let result = objJSON.filter(i=>i!==null);
        fs.writeFileSync(
            `./data/post.json`,
            JSON.stringify(result,null,2)
        );
        resolve(msg);
    });
}

module.exports={
    user:deleteUser,
    post:deletePost
};