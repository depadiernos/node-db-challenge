const express = require("express")
const helmet = require("helmet")

const projectsRouter = require("./projects/projects-router")
const resourcesRouter = require("./resources/resources-router")
const tasksRouter = require("./tasks/tasks-router")


const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())

server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourcesRouter)
server.use("/api/tasks", tasksRouter)

server.use((err, req, res, next) => {
  console.log("Error:", err)

  res.status(500).json({ message: "Something went wrong" })
})

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
