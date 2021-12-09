const { Schema, model } = require('mongoose');

const powersSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
})

const Powers = model('Powers', powersSchema);

module.exports = Powers;