var ActiveRecord = require('./index')

class User extends ActiveRecord {
    constructor(data) {
        super({
            table_name: 'users',
            data: data
        })
    }
}

module.exports = User