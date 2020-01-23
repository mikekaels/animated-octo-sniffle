const ActiveRecord = require('./index')

class Post extends ActiveRecord {
    constructor(data) {
        super({
            table_name: 'posts',
            data: data
        })
    }
}

module.exports = Post;