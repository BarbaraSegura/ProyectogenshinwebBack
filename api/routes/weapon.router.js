const router = require('express').Router()


const {
    getWeapon,
} = require('../controllers/GenshinAPI')

// CRUD basico
router.get('/',getWeapon)

module.exports = router