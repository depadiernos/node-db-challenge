const db = require("../data/db-config")

const find = async () => {
  const tasks = await db("tasks as t").join("projects as p", "t.project_id", "p.id").select("t.description", "t.notes", "t.completed", "p.name as project_name", "p.description as project_description")
  return tasks.map((task) => {
    return { ...task, completed: task.completed === 1 ? true : false }
  })
}

const findById = async (id) => {  
  const [task] = await db("tasks as t").where("t.id", id ).join("projects as p", "t.project_id", "p.id").select("t.description", "t.notes", "t.completed", "p.name as project_name", "p.description as project_description")
  return { ...task, completed: task.completed === 1 ? true : false }
}

const add = async (body) => {
  const [id] = await db("tasks").insert(body)
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
