
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'paint bathroom', description: 'paint guest bathroom'},
        {id: 2, name: 'cabinets', description: 'clean cabinets and repaint cabinet doors'},
        {id: 3, name: 'windows', description: 'wash windows inside and outside'}
      ]);
    });
};
