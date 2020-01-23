var fs = require('fs');

function updateUser(id,obj){
    return new Promise(function(resolve,reject){
        let objJSON = require('../data/users.json');
        let msg = "Failed update data";
        let objJSONMap = objJSON.map(i=>{
            if(i.id==id){
                i.name=obj.name;
                i.email=obj.email;
                i.password=obj.password;
                msg="Successfully updated data"
                return i;
            }
            else{
                return i;
            }
        });
        fs.writeFileSync(
            `./data/users.json`,
            JSON.stringify(objJSONMap,null,2)
        );
        resolve(msg);
    });
}

function updatePost(id,obj){
    return new Promise(function(resolve,reject){
        let objJSON = require('../data/post.json');
        let msg = "Failed update data";
        let objJSONMap = objJSON.map(i=>{
            if(i.id==id){
                i.title=obj.title;
                i.body=obj.body;
                msg="Successfully updated data"
                return i;
            }
            else{
                return i;
            }
        });
        fs.writeFileSync(
            `../data/post.json`,
            JSON.stringify(objJSONMap,null,2)
        );
        resolve(msg);
    });
}

module.exports = {
    user:updateUser,
    post:updatePost
}