const db = require("../data/db-config")

const find = async () => {
  const resources = await db("resources")
  return resources.map((resource) => {
    return { ...resource, completed: resource.completed === 1 ? true : false }
  })
}

const findById = async (id) => {
  return await db("resources").where({ id })
}

const add = async (body) => {
  const [id] = await db("resources").insert(body)
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
