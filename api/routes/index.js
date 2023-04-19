const router = require("express").Router();

const characterRouter = require("./character.router.js")

router.use("/character",characterRouter)

module.exports = router
