
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'project1' },
        {id: 2, name: 'project2'},
        {id: 3, name: 'project3'}
      ]);
    });
};
