const express = require("express")
const Resources = require("./resources-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    res.json(await Resources.find())
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    res.json(await Resources.add(req.body))
  } catch (err) {
    next(err)
  }
})

module.exports = router
