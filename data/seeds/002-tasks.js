exports.seed = async (knex) => {
  await knex("tasks").insert([
    {
      description: "Task to complete",
      notes: "Need to complete before deadline.",
      project_id: 1
    },
    {
      description: "Task to complete 2",
      notes: "Need to complete before deadline.",
      project_id: 2
    },
    {
      description: "Task to complete 3",
      notes: "Need to complete before deadline.",
      project_id: 3
    },
    {
      description: "Task to complete 4",
      notes: "Need to complete before deadline.",
      project_id: 1
    },
    {
      description: "Task to complete 5",
      notes: "Need to complete before deadline.",
      project_id: 2
    },
    {
      description: "Task to complete 6",
      notes: "Need to complete before deadline.",
      project_id: 3
    }
  ])
}
