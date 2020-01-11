exports.seed = async (knex) => {
  await knex("projects_resources").insert([
    { project_id: 1, resource_id: 1, quantity: 1 },
    { project_id: 1, resource_id: 5, quantity: 1 },
    { project_id: 1, resource_id: 6, quantity: 1 },
    { project_id: 2, resource_id: 2, quantity: 1 },
    { project_id: 2, resource_id: 3, quantity: 1 },
    { project_id: 2, resource_id: 6, quantity: 1 },
    { project_id: 3, resource_id: 4, quantity: 1 },
    { project_id: 3, resource_id: 6, quantity: 1 },
    { project_id: 3, resource_id: 2, quantity: 1 }
  ])
}
