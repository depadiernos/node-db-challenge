const db = require("../data/db-config")

const find = async () => {
  const projects = await db("projects")
  return projects.map((project) => {
    return { ...project, completed: project.completed === 1 ? true : false }
  })
}

const findById = async (id) => {
  const project = await db("projects").where({ id }).first()
  return { ...project, completed: project.completed === 1 ? true : false }
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
