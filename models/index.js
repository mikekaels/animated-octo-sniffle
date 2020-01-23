var fs = require('fs');

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

class ActiveRecord {
    constructor(args) {
        this.table_name = args.table_name;
        this.data = args.data
    }

    // private isValidType(data, schema) {
    //     for (let key in schema) {
    //         if (typeof data[key] != schema[key]) {
    //             return false
    //         }
    //     }

    //     return true
    // }

    create() {
        return new Promise((resolve, reject) => {
            // Simple validation
            // if (!isValidType(data, schema.users)) return reject('Schema isn\'t valid');

            // if (this.data.password !== this.data.password_confirmation) {
            //   reject('Password and it\'s confirmation doesn\'t match');
            // }

            const items = require(`${__dirname}/../data/${this.table_name}.json`)
            let newItem = {};
            newItem.id = items.length + 1;

            for (let key in this.data) {
                if (Object.keys(schema[this.table_name]).includes(key)) {
                    newItem[key] = this.data[key];
                }
            }


            items.push(newItem);
            fs.writeFileSync(
                `./data/${this.table_name}.json`,
                JSON.stringify(items, null, 2)
            );

            resolve(items)
        })
    }
}

module.exports = ActiveRecord