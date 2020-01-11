const express = require("express")
const Projects = require("./projects-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    res.json(await Projects.find())
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    res.json(await Projects.add(req.body))
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    res.json(await Projects.findById(req.params.id))
  } catch (err) {
    next(err)
  }
})

module.exports = router
