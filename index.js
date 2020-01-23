const create = require("./libs/create.js");
const updateUser = require("./libs/update.js").user;
const deleteUser = require("./libs/delete.js").user;
const updatePost = require("./libs/update.js").post;
const deletePost = require("./libs/delete.js").post;
const read = require("./libs/read.js");


const User = require("./models/user");
const Post = require("./models/post");
const args = process.argv.slice(2);
const method = args[0];

switch (method) {
    case "create_users":
        const [name, email, password, password_confirmation] = args.slice(1);
        const user = new User({
            name,
            email,
            password,
            password_confirmation
        });

        user.create()
            .then(data => console.log(data))
            .catch(err => console.error(err));
        break;
    case "update_users":
        let id_updateUser = args[1];
        let objUser = JSON.parse(args[2]);
        updateUser(id_updateUser, objUser).then(data => {
            console.log(data);
        });
        break;
    case "delete_users":
        let id_deleteUser = args[1];
        deleteUser(id_deleteUser).then(data => {
            console.log(data);
        });
        break;
    case "update_post":
        let id_updatePost = args[1];
        let objPost = JSON.parse(args[2]);
        updatePost(id_updatePost, objPost).then(data => {
            console.log(data);
        });
        break;
    case "delete_post":
        let id_deletePost = args[1];
        deletePost(id_deletePost).then(data => {
            console.log(data);
        });
        break;
    case "read_user":
        read(args.slice(1)[0]);
        break;
    case "create_posts":
        const [title, body] = args.slice(1);
        const post = new Post({ title, body });

        post
            .create()
            .then(data => console.log(data))
            .catch(err => console.error(err));
        break;
    default:
        console.log("Unknown operation!");
}
