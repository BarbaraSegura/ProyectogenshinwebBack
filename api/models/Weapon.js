const mongoose = require("mongoose");

const weaponSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    image: {
        type: String,
    },
    rarity: {
        type: Number,
    },
    baseAttack: {
        type: Number,
    },
    subStat: {
        type: String
    },
    passiveName: {
        type: String
    },
    location: {
        type: String
    }
});

const weaponModel = mongoose.model("weapon", weaponSchema);
module.exports = weaponModel;
