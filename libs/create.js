var fs = require('fs');
var users = require('../data/users.json');
var posts = require('../data/posts.json');

const schema = {
  users: {
    name: 'string',
    email: 'string',
    password: 'string',
  },
  posts: {
    title: 'string',
    body: 'string',
  }
}

const isValidType = (data, schema) => {
  for (let key in schema) {
    if (typeof data[key] != schema[key]) {
      return false
    }
  }

  return true
}


const createUser = (data) => {
  return new Promise(function (resolve, reject) {
    // Simple validation
    if (!isValidType(data, schema.users)) return reject('Schema isn\'t valid');

    if (data.password !== data.password_confirmation) {
      reject('Password and it\'s confirmation doesn\'t match');
    }

    let newUser = {};
    newUser.id = users.length + 1;

    for (key in data) {
      if (Object.keys(schema.users).includes(key)) {
        newUser[key] = data[key]
      }
    }

    users.push(newUser);
    fs.writeFileSync(
      `./data/users.json`,
      JSON.stringify(users, null, 2)
    );

    resolve(users)
  })
}

const createPost = (data) => {
  return new Promise((resolve, reject) => {
    if (!isValidType(data, schema.posts)) reject('The data type doesn\'t match');

    posts.push(Object.assign({}, data, { id: posts.length + 1 }))

    fs.writeFileSync(
      `./data/posts.json`,
      JSON.stringify(posts, null, 2
    ));
    resolve(posts)
  })
}

module.exports = {
  user: createUser,
  post: createPost
}
