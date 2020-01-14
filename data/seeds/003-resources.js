exports.seed = async (knex) => {
  await knex("resources").insert([
    {
      name: "Resource 1",
      description: "A resource to use"
    },
    {
      name: "Resource 2",
      description: "A resource to use"
    },
    {
      name: "Resource 3",
      description: "A resource to use"
    },
    {
      name: "Resource 4",
      description: "A resource to use"
    },
    {
      name: "Resource 5",
      description: "A resource to use"
    },
    {
      name: "Resource 6",
      description: "A resource to use"
    }
  ])
}
