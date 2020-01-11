const db = require("../data/db-config")

const find = async () => {
  const tasks = await db("tasks")
  return tasks.map((task) => {
    return { ...task, completed: task.completed === 1 ? true : false }
  })
}

const findById = async (id) => {  
  const [task] = await db("tasks").where({ id })
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
