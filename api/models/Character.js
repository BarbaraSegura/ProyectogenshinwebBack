const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  imagen: {
    type: String,
  },
  vision: {
    type: String,
  },
  weapon: {
    type: String,
  },
  nation: {
    type: String
  },
  rarity: {
    type: Number
  },
  description: {
    type: String
  },
  avatar: {
    type: String
  }    
});

const characterModel = mongoose.model("character", characterSchema);
module.exports = characterModel;
