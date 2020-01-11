exports.seed = async (knex) => {
  await knex("projects").insert([
    {
      name: "Project",
      description: "This is a project"
    },
    {
      name: "Project",
      description: "This is a project"
    },
    {
      name: "Project",
      description: "This is a project"
    }
  ])
}
