const { Schema, model } = require('mongoose');
const { Powers } = require('./Powers');

const characterSchema = new Schema({
    _id: {
        type: Number,
    },
    name: {
        type: String,
    },
    finesse: {
        type: Number,
    },
    fortitude: {
        type: Number,
    },
    influence: {
        type: Number,
    },
    might: {
        type: Number,
    },
    understanding: {
        type: Number,
    },
    minor: {
        type: Number,
    },
    severe: {
        type: Number,
    },
    grievous: {
        type: Number,
    },
    Powers: [
        {
            name: {
                type: String
            },
            description: {
                type: String
            },
        }
    ]
})

const Character = model('Character', characterSchema);

module.exports = Character;