
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'taskDesc1', project_id: 1},
        {id: 2, description: 'taskDesc2', project_id: 2},
        {id: 3, description: 'taskDesc3', project_id: 3},
        {id: 4, description: 'taskDesc4', project_id: 3}
      ]);
    });
};
