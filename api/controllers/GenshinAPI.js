const Character = require("../models/Character")

function getCharacter(req, res) {
    Character
        .find(req.query)
        .then(characters => res.json(characters))
        .catch(err => handleError(err, res))
}

module.exports = {
    getCharacter,
}