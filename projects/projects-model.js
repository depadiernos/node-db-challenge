const db = require("../data/db-config")
const Task = require("../tasks/tasks-model")
const Resources = require("../resources/resources-model")

const find = async () => {
  const projects = await db("projects")
  return projects.map((project) => {
    return { ...project, completed: project.completed === 1 ? true : false }
  })
}

const findById = async (id) => {
  const project = await db("projects")
    .where({ id })
    .first()
  const _tasks = await db("tasks")
    .where({ id })
    .select("description", "notes", "completed")
  const tasks = _tasks.map((task) => {
    return { ...task, completed: task.completed === 1 ? true : false }
  })
  const resources = await db("resources as r")
    .join("projects_resources as pr", "pr.resource_id", "r.id")
    .where("pr.project_id", id)
    .select("r.id", "r.name", "r.description")
  return { ...project, tasks, resources, completed: project.completed === 1 ? true : false }
}

const add = async (body) => {
  const [id] = await db("projects").insert(body)
  return await findById(id)
}

const update = () => {}

const remove = () => {}

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}
