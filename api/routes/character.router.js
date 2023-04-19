const router = require('express').Router()


const {
    getCharacter,
} = require('../controllers/GenshinAPI')

// CRUD basico
router.get('/',getCharacter)

module.exports = router