
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'paint'},
        {id: 2, resource_name: 'ladder'},
        {id: 3, resource_name: 'paintbrushes'},
        {id: 4, resource_name: 'roller'},
        {id: 5, resource_name: 'soapy water'},
        {id: 6, resource_name: 'sponge'},
        {id: 7, resource_name: 'squeegy'},
        {id: 8, resource_name: 'windex'},
        {id: 9, resource_name: 'paper towels'}
      ]);
    });
};
