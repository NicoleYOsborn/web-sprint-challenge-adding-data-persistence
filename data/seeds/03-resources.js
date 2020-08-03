
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'resourceName1', description: 'resourceDesc1'},
        {id: 2, resource_name: 'resourceName2', description: 'resourceDesc2'},
        {id: 3, resource_name: 'resourceName3', description: 'resourceDesc3'}
      ]);
    });
};
