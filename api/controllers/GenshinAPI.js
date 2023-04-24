const Character = require("../models/Character")
const Weapon = require("../models/Weapon")

function getCharacter(req, res) {
    Character
        .find(req.query)
        .then(characters => res.json(characters))
        .catch(err => handleError(err, res))
}

function getWeapon(req, res) {
    Weapon
        .find(req.query)
        .then(weapons => res.json(weapons))
        .catch(err => handleError(err, res))
}

module.exports = {
    getCharacter,
    getWeapon
}