const router = require("express").Router();

const characterRouter = require("./character.router.js")
const weaponRouter = require("./weapon.router.js")

router.use("/character",characterRouter)
router.use("/weapon",weaponRouter)

module.exports = router
