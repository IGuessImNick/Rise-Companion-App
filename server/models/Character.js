const { Schema, model } = require('mongoose');

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
    abilities: [
        {
            _id: {
                type: Number
            },
            abilityName: {
                type: String
            },
        }
    ]
})

const Character = model('Character', characterSchema);

module.exports = Character;